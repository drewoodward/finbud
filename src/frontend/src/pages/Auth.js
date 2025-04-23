import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const response = await axios.post(endpoint, formData);
      console.log(response.data); // or redirect, set token, etc.
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p onClick={toggleForm}>
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
      </p>
    </div>
  );
};

export default Auth;
