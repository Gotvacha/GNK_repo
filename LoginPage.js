import React, { useState } from "react";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./loginpage.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/customButton/CustomButton";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await signOut(auth);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");
      setErrorMessage("");
      window.location.href = "/mainPage";
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-page-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <CustomButton type="submit" pad_weight={113.5} value="Log In" />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default LoginPage;