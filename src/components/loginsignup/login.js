import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import Footer from "../footer/footer";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

// import { useHistory } from "react-router-dom"; // Assuming you're using React Router

export default function Login() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7186/api/Auth/Login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log("Login successful");
      toast.success("Login successful");

      const token = data.responseData;
      const decoded = jwtDecode(token);
      console.log(decoded);

      // if (data.role === "ADMIN") {
      //   history.push("/admin/dashboard");
      // } else if (data.role === "BLOGGERS") {
      //   history.push("/blogs");
      // } else {
      //   history.push("/");
      // }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to login. OK?");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <div className="text-center">
            <button type="submit" className="login-button">
              Log In
            </button>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
