import React from 'react';
import './users.css'; // Import CSS file

const Users = () => {
  const users = [
    { fullName: 'John Doe', email: 'john@example.com' },
    { fullName: 'Jane Smith', email: 'jane@example.com' },
    { fullName: 'Alice Johnson', email: 'alice@example.com' },
  ];

  return (
    <div className="users-container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <strong>Full Name:</strong> {user.fullName}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
