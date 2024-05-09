import "./adminSidebar.css";
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li>
            <Link to="/admin/create-blog">
              <i className="fas fa-pencil-alt"></i> 
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/create-user">
              <i className="fas fa-user-plus"></i> 
              Create Admin
            </Link>
          </li>
          <li>
            <Link to="/admin/popular-blogs">
              <i className="fas fa-chart-line"></i> 
              Popular Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}