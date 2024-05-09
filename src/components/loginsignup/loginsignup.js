import React, { useState } from 'react';
import "./loginsignup.css";

export default function Loginsignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7186/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      setLoginMessage("Login successful!");
      throw new Error('login successful');
      // Handle successful login, such as redirecting the user or storing authentication token
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="section">
        <div className="center-container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <input type="email" name="logemail" className="form-style" placeholder="Your UserName" id="logemail" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                              <i className=""></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button type="submit" className="btn mt-4">submit</button>
                          </form>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    {/* Sign Up card */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
