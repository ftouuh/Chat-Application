import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file
import axios from "axios";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return ;
    }

    console.log("Submitting signup data:", { username, email, password });

    axios
      .post("http://localhost:3000/signup", { username, email, password })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setUsername("");
    setEmail("");
    setPassword("");
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
          />
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
          />
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
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
