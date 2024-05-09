import React from 'react';
import { Link } from "react-router-dom";
import "./addPostButton.css"; // Import CSS file for styling

export default function AddPostButton() {
  return (
    <div className="center-container"> {/* Container to center the button */}
      <Link to="/addpost" className="addPostButton">
        Add Post
      </Link>
    </div>
  );
}
