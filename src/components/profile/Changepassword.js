import { useState } from 'react';
import './changepassword.css';

export default function ChangePassword() {
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="changePassword">
      <h2>Change Password</h2>
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
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
