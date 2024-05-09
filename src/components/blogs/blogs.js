import React from "react";
import "./blogs.css";
import AddPost from "../posts/Addpost";

const Blog = ({ title, author, content }) => {
  return (
    <div className="blog">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{content}</p>
    </div>
  );
};

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Sample Blog 1",
      author: "John Doe",
      content: "This is the content of Sample Blog 1.",
    },
    {
      id: 2,
      title: "Sample Blog 2",
      author: "Jane Smith",
      content: "This is the content of Sample Blog 2.",
    },
    // Add more blogs as needed
  ];

  return (
    <div>
      <AddPost />
      <h1>Blog Page</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
};

export default BlogPage;
