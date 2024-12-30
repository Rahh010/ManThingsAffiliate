import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import log from './Login.module.css'


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request...");
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/auth/login`, formData, {
        withCredentials: true, // Send cookies with the request
      });
      
      console.log("Logged in successfully", res);

      // Token will be set in cookies (handled by the server)
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error logging in.");
    }
  };

  return (
      <form onSubmit={handleSubmit} className={`${log.form} ${log.font}`} >
        <h2 >Login</h2>
        <input
          
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
  );
};

export default Login;
