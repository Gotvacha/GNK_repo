import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../components/customButton/CustomButton";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");
      setErrorMessage("");
      window.location.href = "/mainpage";
    } catch (error) {
      console.error("Error signing up:", error.message);
      setErrorMessage("Error signing up. Please try again.");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit" value="Sign Up" />
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignupPage;