import React from 'react';
import AdminSidebar from '../adminsidebar/adminSidebar';
import AdminBody from './adminbody';
import './adminhome.css'; // Import CSS file for styling

export default function AdminHome() {
  return (
    <div className="admin-home">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="admin-body">
        <AdminBody />
      </div>
    </div>
  );
}
