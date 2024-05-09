import React from "react";
import { Link } from "react-router-dom";

function BlogPost({ blog }) {
  return (
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.excerpt}</p>
      <Link to={`/post/details/`}>Read more</Link>
    </div>
  );
}

export default BlogPost;
