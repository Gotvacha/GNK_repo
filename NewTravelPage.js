import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { ref, onValue } from "firebase/database";
import MapComponent from "../components/MapComponent";

const NewTravelPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState(["Select a country"]);
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchCountries = () => {
      const countriesRef = ref(db, "country");

      onValue(countriesRef, (snapshot) => {
        const countriesData = snapshot.val();
        if (countriesData) {
          const countryList = Object.keys(countriesData);
          setCountries(["Select a country", ...countryList]);
        }
      });
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
  };

  const countryInfoRef = ref(db, `country/${selectedCountry}`);
    onValue(countryInfoRef, (snapshot) => {
      const countryData = snapshot.val();
      setCountryInfo(countryData);
    });

  return (
    <div style={{ display: "flex" }}>
      {/* Left side: Questions */}
      <div style={{ flex: "1", marginRight: "20px" }}>
        <h1>New Travel</h1>
        <div>
          <label htmlFor="country">Where are you going?</label>
          <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            {countries.map((country, index) => (
              <option key={index} value={country} disabled={index === 0}>
                {country}
              </option>
            ))}
          </select>
        </div>
        {countryInfo && (
          <div>
            <h2>Country Information</h2>
            <p>Exchange Rate: {countryInfo.currency.ExchangeRate}</p>
          </div>
        )}
      </div>
      {/* Right side: Map */}
      <div style={{ flex: "1" }}>
        <MapComponent />
      </div>
    </div>
  );
};

export default NewTravelPage;