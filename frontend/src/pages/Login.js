import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');  // Use navigate to go to the dashboard
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="w-1/3 p-4 border rounded shadow-md">
        <h1 className="text-2xl mb-4">Login</h1>
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
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white p-2 rounded w-full">
            Login
          </button>
          <button
            type="button" 
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
