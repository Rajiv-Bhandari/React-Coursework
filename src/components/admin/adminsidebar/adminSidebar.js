import "./adminSidebar.css";
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li>
            <Link to="/admin/dashboard">
            <i class="fa fa-list" aria-hidden="true"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/createadmin">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
              Create Admin
            </Link>
          </li>
          <li>
            <Link to="/admin/popularblogs">
            <i class="fa fa-line-chart" aria-hidden="true"></i>

              Popular Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
