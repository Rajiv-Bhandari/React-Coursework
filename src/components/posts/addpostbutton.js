import React from 'react';
import { Link } from "react-router-dom";

export default function addPostButton() {
  return (
    <div>
        <Link to="/addpost" className="addPostButton">
          Add Post
        </Link>
    </div>
  );
}
