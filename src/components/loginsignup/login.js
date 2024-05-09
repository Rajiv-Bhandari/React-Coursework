import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import Footer from "../footer/footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7186/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Failed to login');
        toast.error('Incorrect Email or Password!');
      }

      console.log('Login successful');
      toast.success('Login successful');
      // Handle successful login, such as redirecting the user or storing authentication token
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to login');
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            name="email" 
            className="login-input" 
            placeholder="Your Email" 
            autoComplete="off" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            name="password" 
            className="login-input" 
            placeholder="Your Password" 
            autoComplete="off" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className='text-center'>

          <button type="submit" className="login-button">Log In</button>
          </div>
        </form>
      </div>
      <Footer/>
      <ToastContainer />
    </>
  );
}
