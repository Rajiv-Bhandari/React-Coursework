import React, { useState, useEffect } from "react";
import "./users.css"; // Import CSS file

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://localhost:7186/api/dashboard/get-all-users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.responseData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <strong>Full Name:</strong> {user.fullName}, <strong>Email:</strong>{" "}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
