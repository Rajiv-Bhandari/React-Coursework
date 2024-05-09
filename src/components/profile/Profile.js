import React, { useState } from 'react';
import './profile.css';
import Footer from "../footer/footer";

export default function Profile() {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    username: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle update button click
  const handleUpdate = () => {
    // Assuming you have an id for the profile, replace '123' with the actual id
    const id = '123';
    fetch(`https://localhost:7186/api/profile/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Profile updated successfully');
        // You can add any further actions here, like showing a success message
      } else {
        console.error('Failed to update profile');
        // Handle error scenarios
      }
    })
    .catch(error => {
      console.error('Error updating profile:', error);
    });
  };

  return (
    <>
    <div className="profile">
      <h2 class="my-3">Your Details</h2>
      <div className="profileDetails">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
      </div>
        <div className='text-center m-3'>
        <button className="updateButton p-1" onClick={handleUpdate}>Update</button>
      </div>
    </div>
    </>
  );
}
