import React from 'react';
import "./adminbody.css";

export default function AdminBody() {
  return (
    <div className="admin-body">
      <h2>Admin Panel</h2>
      <div className="admin-content">
        {/* Your admin content goes here */}
        <p>This is the main content area for the admin panel.</p>
        <p>You can add tables, charts, forms, or other components here.</p>
      </div>
    </div>
  );
}
