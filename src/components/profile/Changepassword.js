import React, { useState } from 'react';
import './changepassword.css';
import Footer from "../footer/footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match");
      toast.error('New password and confirm password do not match');
      return;
    }

    // try {
    //   const response = await fetch('your_change_password_api_endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Add any additional headers if required
    //     },
    //     body: JSON.stringify({
    //       previousPassword,
    //       newPassword,
    //     }),
    //   });

    //   const data = await response.json();

    //   // Check if the request was successful
    //   if (response.ok) {
    //     setMessage("Password changed successfully");
    //   } else {
    //     setMessage(data.error || "Failed to change password");
    //   }
    // } catch (error) {
    //   setMessage("An error occurred. Please try again later.");
    //   console.error('Error:', error);
    // }
  };

  return (
    <>
    <div className="changePassword">
      <h2>Change Password</h2>
      {message && <div className="toaster">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="previousPassword">Previous Password</label>
          <input
            type="password"
            id="previousPassword"
            value={previousPassword}
            onChange={(e) => setPreviousPassword(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div class="submit-btn text-center ">
        <button type="submit"  class="p-2">Change Password</button>

        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
}
