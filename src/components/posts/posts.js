// import "./posts.css";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../sidebar/sidebar";
// import addPostButton from "./addpostbutton";

// const initialMusicBlogs = [
//   {
//     id: 1,
//     title: "Music Blog 1",
//     author: "Author 1",
//     content: "Content 1",
//     liked: false,
//   },
//   {
//     id: 2,
//     title: "Music Blog 2",
//     author: "Author 2",
//     content: "Content 2",
//     liked: false,
//   },
//   {
//     id: 3,
//     title: "Music Blog 3",
//     author: "Author 3",
//     content: "Content 3",
//     liked: false,
//   },
// ];

// const initialMovieBlogs = [
//   {
//     id: 1,
//     title: "Movie Blog 1",
//     author: "Author 1",
//     content: "Content 1",
//     liked: false,
//   },
//   {
//     id: 2,
//     title: "Movie Blog 2",
//     author: "Author 2",
//     content: "Content 2",
//     liked: false,
//   },
//   {
//     id: 3,
//     title: "Movie Blog 3",
//     author: "Author 3",
//     content: "Content 3",
//     liked: false,
//   },
// ];

// const initialTechBlogs = [
//   {
//     id: 1,
//     title: "Tech Blog 1",
//     author: "Author 1",
//     content: "Content 1",
//     liked: false,
//   },
//   {
//     id: 2,
//     title: "Tech Blog 2",
//     author: "Author 2",
//     content: "Content 2",
//     liked: false,
//   },
//   {
//     id: 3,
//     title: "Tech Blog 3",
//     author: "Author 3",
//     content: "Content 3",
//     liked: false,
//   },
// ];

// function Post() {
//   const [musicBlogs, setMusicBlogs] = useState(initialMusicBlogs);
//   const [movieBlogs, setMovieBlogs] = useState(initialMovieBlogs);
//   const [techBlogs, setTechBlogs] = useState(initialTechBlogs);

//   const handleLike = (blogId, category) => {
//     switch (category) {
//       case "music":
//         setMusicBlogs((prevBlogs) =>
//           prevBlogs.map((blog) =>
//             blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
//           )
//         );
//         break;
//       case "movies":
//         setMovieBlogs((prevBlogs) =>
//           prevBlogs.map((blog) =>
//             blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
//           )
//         );
//         break;
//       case "tech":
//         setTechBlogs((prevBlogs) =>
//           prevBlogs.map((blog) =>
//             blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
//           )
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="post-container">
//           <h2 class="me-3">Music Blogs</h2>
//           {musicBlogs.map((blog) => (
//             <div key={blog.id} className="blog">
//               <h4>{blog.title}</h4>
//               <p>Author: {blog.author}</p>
//               <p>{blog.content}</p>
//               <div className="blog-footer">
//                 <Link to={`/post/details/`} className="read-more">
//                   Read More
//                 </Link>
//                 <span
//                   className={`heart-icon ${blog.liked ? "liked" : ""}`}
//                   onClick={() => handleLike(blog.id, "music")}
//                 >
//                   &#9829;
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="post-container">
//           <h2 class="me-3">Movie Blogs</h2>
//           {movieBlogs.map((blog) => (
//             <div key={blog.id} className="blog">
//               <h4>{blog.title}</h4>
//               <p>Author: {blog.author}</p>
//               <p>{blog.content}</p>
//               <div className="blog-footer">
//                 <Link to={`/post/details/`} className="read-more">
//                   Read More
//                 </Link>
//                 <span
//                   className={`heart-icon ${blog.liked ? "liked" : ""}`}
//                   onClick={() => handleLike(blog.id, "movies")}
//                 >
//                   &#9829;
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="post-container">
//           <h2 class="me-4">Tech Blogs</h2>

//           {techBlogs.map((blog) => (
//             <div key={blog.id} className="blog">
//               <h4>{blog.title}</h4>
//               <p>Author: {blog.author}</p>
//               <p>{blog.content}</p>
//               <div className="blog-footer">
//                <Link to={`/post/details/`} className="read-more">
//                   Read More
//                 </Link>
//                 <span
//                   className={`heart-icon ${blog.liked ? "liked" : ""}`}
//                   onClick={() => handleLike(blog.id, "tech")}
//                 >
//                   &#9829;
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Post;

//uncomment top for static data but wait for testing
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7186/api/post/get-all-post")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => {
        toast.error('Failed to fetch from API!');
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <div className="post-container">
        <h2 className="me-3">All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="blog">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <div className="blog-footer">
              <Link to={`/post/details/${post.id}`} className="read-more">
                Read More
              </Link>
              {/* Add like functionality if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
