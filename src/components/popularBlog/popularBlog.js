import React from "react";
import BlogPost from "./BlogPost";
import "./popularBlog.css";

const staticBlogs = [
  {
    id: 1,
    title: "Example Blog 1",
    author: "John Doe",
    date: "May 1, 2024",
    excerpt: "This is an excerpt of Example Blog 1.",
    url: "https://example.com/blog1",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  {
    id: 2,
    title: "Example Blog 2",
    author: "Jane Smith",
    date: "May 2, 2024",
    excerpt: "This is an excerpt of Example Blog 2.",
    url: "https://example.com/blog2",
  },
  // Add more static blog data here...
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Top 10 Popular Blogs</h1>
      </header>
      <main>
        <div className="blog-list">
          {staticBlogs.map((blog) => (
            <BlogPost key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
