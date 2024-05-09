import React from "react";

function BlogPost({ blog }) {
  return (
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.excerpt}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default BlogPost;
