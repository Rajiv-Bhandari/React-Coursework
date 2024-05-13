import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Post() {
  const initialMusicBlogs = [
    {
      id: 1,
      title: "Music Blog 1",
      author: "Author 1",
      content: "Content 1",
      liked: false,
      imageUrl: "https://blog.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=595&height=400&name=parts-url_1.webp", 
    },
    {
      id: 2,
      title: "Music Blog 2",
      author: "Author 2",
      content: "Content 2",
      liked: false,
      imageUrl: "https://capian.co/assets/images/uploads/blog/ckia8-music-lockdown-1fa0fb8b.jpg", 
    },
    {
      id: 3,
      title: "Music Blog 3",
      author: "Author 3",
      content: "Content 3",
      liked: false,
      imageUrl: "https://cdn.vox-cdn.com/thumbor/8fHlyH3tqfMxAHz0hXowSXaZuis=/2x0:996x746/1200x800/filters:focal(2x0:996x746)/cdn.vox-cdn.com/uploads/chorus_image/image/48729983/shutterstock_93888712.0.0.jpg", 
    },
  ];
  
  const initialMovieBlogs = [
    {
      id: 1,
      title: "Movie Blog 1",
      author: "Author 1",
      content: "Content 1",
      liked: false,
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-ucjanhybzu-portrait.jpg", 
    },
    {
      id: 2,
      title: "Movie Blog 2",
      author: "Author 2",
      content: "Content 2",
      liked: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjv3564n9wTU_soUG45_spzGaWiz11zcFASa1YykwPw&s", 
    },
    {
      id: 3,
      title: "Movie Blog 3",
      author: "Author 3",
      content: "Content 3",
      liked: false,
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1709921464/amc-cdn/production/2/movies/70800/70790/PosterDynamic/163689.jpg", 
    },
  ];
  
  const initialTechBlogs = [
    {
      id: 1,
      title: "Tech Blog 1",
      author: "Author 1",
      content: "Content 1",
      liked: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHG5FcgB3GqLT3nuzxV8j-D6UOWx7krtsJT4UZ9t1tAA&s", 
    },
    {
      id: 2,
      title: "Tech Blog 2",
      author: "Author 2",
      content: "Content 2",
      liked: false,
      imageUrl: "https://www.syte.ai/wp-content/uploads/2021/10/Glossary-Images-1-24_23-1024x625.jpg", 
    },
    {
      id: 3,
      title: "Tech Blog 3",
      author: "Author 3",
      content: "Content 3",
      liked: false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZmuoe430RHaCWlEZXAHaB2oi4OX3nMoXd7vR9gArtw&s", 
    },
  ];
  
  const [musicBlogs, setMusicBlogs] = useState(initialMusicBlogs);
  const [movieBlogs, setMovieBlogs] = useState(initialMovieBlogs);
  const [techBlogs, setTechBlogs] = useState(initialTechBlogs);
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const fetchImages = async (blogs, setBlogs) => {
      try {
        const fetchedBlogs = await Promise.all(
          blogs.map(async (blog) => {
            try {
              const response = await fetch(blog.imageUrl);
              if (!response.ok) {
                throw new Error("Failed to fetch image");
              }
              const blob = await response.blob();
              const imageUrl = URL.createObjectURL(blob);
              return { ...blog, imageUrl };
            } catch (error) {
              console.error("Error fetching image:", error);
              return { ...blog, imageUrl: null };
            }
          })
        );
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching images:", error);
        toast.error('Failed to fetch images!');
      }
    };

    fetchImages(initialMusicBlogs, setMusicBlogs);
    fetchImages(initialMovieBlogs, setMovieBlogs);
    fetchImages(initialTechBlogs, setTechBlogs);
  }, []);

  return (
    <div>
      <h2 className="text-center">Bislerium Blogs</h2>
      <div class="post-container row justify-content-center">
        {musicBlogs.map((blog) => (
          <div key={blog.id} className="blog col-lg-6">
            {blog.imageUrl ? (
              <img src={blog.imageUrl} alt={blog.title} width="100%"/>
            ) : (
              <div className="image-not-found">No Image Found</div>
            )}
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <div className="vote-section">
                <div className="vote-icon">
                  <i className="fas fa-thumbs-up fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.up || 34}</span>
                </div>
                <div className="vote-icon">
                  <i className="fas fa-thumbs-down fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.down || 6}</span>
                </div>
              </div>
              <Link to={`/post/details/`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}

      </div>

      <div className="post-container row justify-content-center">
        {movieBlogs.map((blog) => (
          <div key={blog.id} className="blog col-lg-6">
            {blog.imageUrl ? (
              <img src={blog.imageUrl} alt={blog.title} width="100%"/>
            ) : (
              <div className="image-not-found">No Image Found</div>
            )}
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <div className="vote-section">
                <div className="vote-icon">
                  <i className="fas fa-thumbs-up fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.up || 40}</span>
                </div>
                <div className="vote-icon">
                  <i className="fas fa-thumbs-down fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.down || 1}</span>
                </div>
              </div>
              <Link to={`/post/details/`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="post-container row justify-content-center">
        {techBlogs.map((blog) => (
          <div key={blog.id} className="blog">
            {blog.imageUrl ? (
              <img src={blog.imageUrl} alt={blog.title} width="100%"/>
            ) : (
              <div className="image-not-found">No Image Found</div>
            )}
            <h4>{blog.title}</h4>
            <p>Author: {blog.author}</p>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <div className="vote-section">
                <div className="vote-icon">
                  <i className="fas fa-thumbs-up fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.up || 34}</span>
                </div>
                <div className="vote-icon">
                  <i className="fas fa-thumbs-down fa-2x"></i>
                  <span className="vote-count">{votes[blog.id]?.down || 9}</span>
                </div>
              </div>
              <Link to={`/post/details/`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./posts.css";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Post() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://localhost:7186/api/post/get-all-post")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch');
//         }
//         return response.json();
//       })
//       .then((data) => setPosts(data))
//       .catch((error) => {
//         toast.error('Failed to fetch from API!');
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="post-container">
//         <h2 className="me-3">All Posts</h2>
//         {posts.map((post) => (
//           <div key={post.id} className="blog">
//             <h4>{post.title}</h4>
//             <p>{post.description}</p>
//             <div className="blog-footer">
//               <Link to={`/post/details/${post.id}`} className="read-more">
//                 Read More
//               </Link>
//               {/* Add like functionality if needed */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Post;
