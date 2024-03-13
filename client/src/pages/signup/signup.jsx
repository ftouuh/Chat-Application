import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty password
    if (!password) {
      setErrors({ password: "Password cannot be empty." });
      return;
    }

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Submitting signup data:", { username, email, password });
    navigate("/login");

    axios
      .post("http://localhost:3000/signup", { username, email, password })
      .then((res) => {
        console.log("Signup Successful", res.data);
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.response) {
          const errObj = error.response.data;
          if (errObj.errors) {
            const newErrors = {};
            Object.entries(errObj.errors).forEach(([field, message]) => {
              newErrors[field] = message;
            });
            setErrors(newErrors);
          } else {
            setErrors({ general: "Signup failed. Please try again." });
          }
        } else if (error.request) {
          setErrors({
            general: "Network error. Please check your internet connection.",
          });
        } else {
          setErrors({ general: "An error occurred. Please try again." });
        }
      });
  };

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={errors.username ? "error-input" : ""}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {errors.general && <p className="general-error">{errors.general}</p>}
    </div>
  );
};

export default Signup;
