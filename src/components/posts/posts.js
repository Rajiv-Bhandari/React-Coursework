import "./posts.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialMusicBlogs = [
  {
    id: 1,
    title: "Music Blog 1",
    author: "Author 1",
    content: "Content 1",
    liked: false,
  },
  {
    id: 2,
    title: "Music Blog 2",
    author: "Author 2",
    content: "Content 2",
    liked: false,
  },
  {
    id: 3,
    title: "Music Blog 3",
    author: "Author 3",
    content: "Content 3",
    liked: false,
  },
];

const initialMovieBlogs = [
  {
    id: 1,
    title: "Movie Blog 1",
    author: "Author 1",
    content: "Content 1",
    liked: false,
  },
  {
    id: 2,
    title: "Movie Blog 2",
    author: "Author 2",
    content: "Content 2",
    liked: false,
  },
  {
    id: 3,
    title: "Movie Blog 3",
    author: "Author 3",
    content: "Content 3",
    liked: false,
  },
];

const initialTechBlogs = [
  {
    id: 1,
    title: "Tech Blog 1",
    author: "Author 1",
    content: "Content 1",
    liked: false,
  },
  {
    id: 2,
    title: "Tech Blog 2",
    author: "Author 2",
    content: "Content 2",
    liked: false,
  },
  {
    id: 3,
    title: "Tech Blog 3",
    author: "Author 3",
    content: "Content 3",
    liked: false,
  },
];

function Post() {
  const [musicBlogs, setMusicBlogs] = useState(initialMusicBlogs);
  const [movieBlogs, setMovieBlogs] = useState(initialMovieBlogs);
  const [techBlogs, setTechBlogs] = useState(initialTechBlogs);

  const handleLike = (blogId, category) => {
    switch (category) {
      case "music":
        setMusicBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
          )
        );
        break;
      case "movies":
        setMovieBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
          )
        );
        break;
      case "tech":
        setTechBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="post-container">
        <h2>Music Blogs</h2>
        {musicBlogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
              <span
                className={`heart-icon ${blog.liked ? "liked" : ""}`}
                onClick={() => handleLike(blog.id, "music")}
              >
                &#9829;
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="post-container">
        <h2>Movie Blogs</h2>
        {movieBlogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
              <span
                className={`heart-icon ${blog.liked ? "liked" : ""}`}
                onClick={() => handleLike(blog.id, "movies")}
              >
                &#9829;
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="post-container">
        <h2>Tech Blogs</h2>

        {techBlogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
              <span
                className={`heart-icon ${blog.liked ? "liked" : ""}`}
                onClick={() => handleLike(blog.id, "tech")}
              >
                &#9829;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
