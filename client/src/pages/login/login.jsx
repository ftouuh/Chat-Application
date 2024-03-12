import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Use errors object instead of errorMessage
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setErrors({ general: "Please fill all fields." }); // Set specific error
      return;
    }

    axios
      .post("http://localhost:3000/login", { username, password })
      .then((response) => {
        console.log(response);
        navigate('/home')
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
            setErrors({ general: "password or username incorrect !" });
          }
        } else {
          setErrors({ general: "Network error." });
        }
      });

    console.log("Submitting login data:", { username, password });
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {Object.keys(errors).length > 0 && (
        <ul className="error-messages">
          {Object.entries(errors).map(([field, message]) => (
            <li key={field}>
              {field === "general"
                ? message
                : `${field.charAt(0).toUpperCase()}${field.slice(
                    1
                  )}: ${message}`}
            </li>
          ))}
        </ul>
      )}
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
