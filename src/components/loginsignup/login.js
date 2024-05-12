import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import Footer from "../footer/footer";
// import { useHistory } from "react-router-dom"; // Assuming you're using React Router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7186/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log("Login successful");
      toast.success("Login successful");

      document.cookie = `x-access-token=${data.token}; path=/;`;

      // if (data.role === "ADMIN") {
      //   history.push("/admin/dashboard");
      // } else if (data.role === "BLOGGERS") {
      //   history.push("/blogs");
      // } else {
      //   history.push("/");
      // }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to login");
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
