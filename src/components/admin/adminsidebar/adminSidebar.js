import "./adminSidebar.css";
import { Link } from 'react-router-dom';

export default function adminSidebar() {
  return (
    <div className="row">
      <div className="col-lg-4">  
        <div className="admin-sidebar my-4">
          <h3>Admin Dashboard</h3>
          <ul>
            <li>
              <Link to="/admin/create-blog">
                <i className="fas fa-pencil-alt"></i> 
                Create Blog
              </Link>
            </li>
            <li>
              <Link to="/admin/create-user">
                <i className="fas fa-user-plus"></i> 
                Create User
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
    </div>
  );
}
