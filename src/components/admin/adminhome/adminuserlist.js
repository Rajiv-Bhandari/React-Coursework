import React from 'react';
import AdminSidebar from '../adminsidebar/adminSidebar';
import Users from './users';
import './dashboard.css';
import Footer from "../../footer/footer";

export default function AdminUserList() {
  return (
    <>
    <div className="admin-home">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <Users/>
    </div>
    <Footer/>
    </>
  );
}
