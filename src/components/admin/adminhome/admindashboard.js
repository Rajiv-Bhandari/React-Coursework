import React from 'react';
import AdminSidebar from '../adminsidebar/adminSidebar';
import AdminBody from './adminbody';
import './dashboard.css';

export default function AdminHome() {
  return (
    <div className="admin-home">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="admin-body">
      <div className="dashboard-container">
      <div className="dashboard-item">
        <h3>Total Posts</h3>
        <p className="number">50</p>
      </div>
      <div className="dashboard-item">
        <h3>This Month Posts</h3>
        <p className="number">10</p>
      </div>
      <div className="dashboard-item">
        <h3>Total Comments</h3>
        <p className="number">150</p>
      </div>
      <div className="dashboard-item">
        <h3>Total Upvotes</h3>
        <p className="number">300</p>
      </div>
      <div className="dashboard-item">
        <h3>Total Downvotes</h3>
        <p className="number">100</p>
      </div>
    </div>
      </div>
    </div>
  );
}
