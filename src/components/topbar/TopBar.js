import { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/blogs">BLOG</Link>
          </li>
          <li className="topListItem">CONTACT</li>

          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <div className="profileIcon" onClick={handleProfileClick}>
          <img
            className="topImg"
            src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
            alt=""
          />
          {/* Conditionally render profile menu */}
          {isProfileMenuOpen && (
            <div className="profileMenu">
              <Link to="/profile" className="profileMenuItem">
                Profile
              </Link>
              <Link to="/changepassword" className="profileMenuItem">
                Change Password
              </Link>
            </div>
          )}
        </div>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
