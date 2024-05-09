import React, { useState } from 'react';
import "./loginsignup.css";
import Footer from "../footer/footer";

export default function Loginsignup() {
  const [fullName, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7186/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, username, password })
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      console.log('Registration successful');
      // Handle successful registration, such as redirecting the user or displaying a success message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div>
      <div className="section">
        <div className="center-container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">Sign Up</h6>
                {/* <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/> */}
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <input type="text" name="fullName" className="form-style" placeholder=" Full Name" id="fullName" autoComplete="off" value={fullName} onChange={(e) => setName(e.target.value)} />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="email" name="username" className="form-style" placeholder=" UserName" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" name="password" className="form-style" placeholder=" Password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button type="submit" className="btn mt-4">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
