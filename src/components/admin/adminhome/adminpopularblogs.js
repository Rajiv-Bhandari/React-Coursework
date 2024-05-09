import React from 'react';
import AdminSidebar from '../adminsidebar/adminSidebar';
import PopularBlog from '../../popularBlog/popularBlog';
import AdminBody from './adminbody';
import './dashboard.css';
import Footer from "../../footer/footer";

export default function AdminPopularBlogs() {
  return (
    <>
    <div className="admin-home">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <PopularBlog/>
    </div>
    <Footer/>
    </>
  );
}
