import React from 'react';
import './profile.css';

export default function Profile() {
  return (
    <div className="profile">
      <h2>Your Details</h2>
      <div className="profileDetails">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <button className="updateButton">Update</button>
      </div>
    </div>
  );
}
