import React from 'react'
import { Link } from 'react-router-dom';



export default function adminSidebar() {
  return (
    <div className="admin-sidebar">
    <h3>Admin Panel</h3>
    <ul>
      <li>
        <Link to="/admin/create-blog">Create Blog</Link>
      </li>
      <li>
        <Link to="/admin/create-user">Create User</Link>
      </li>
      <li>
        <Link to="/admin/popular-blogs">Popular Blogs</Link>
      </li>
    </ul>
  </div> )
}
