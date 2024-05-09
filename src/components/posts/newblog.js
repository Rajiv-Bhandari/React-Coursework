import React from 'react';
import { Link } from "react-router-dom";
import AddPostButton from "../posts/addpostbutton";
import Posts from "../posts/posts";

export default function NewBlog() {
  return (
    <div>
        <AddPostButton/>
        {/* <Link to="/post" className="addPostButton">
          Add Post
        </Link> */}
        <Posts/>
    </div>
  );
}
