import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../utils/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, email, password });
      navigate("/"); // Use navigate to go to the login page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleRegister}
        className="w-1/3 p-4 border rounded shadow-md"
      >
        <h1 className="text-2xl mb-4">Register</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Password"
        />
        <div className="flex justify-between space-x-2">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded w-full"
          >
            Register
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
