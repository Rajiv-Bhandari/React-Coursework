// import "./header.css";

// export default function Header() {
//   return (
//     <div className="header">
//       <div className="headerTitles">
//         {/* <span className="headerTitleSm">React & .net</span> */}
//         {/* <span className="headerTitleLg">Blog</span> */}
//       </div>
//       {/* <img
//         className="headerImg"
//         src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="blog page"
//       /> */}
//     </div>
//   );
// }

import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>Bislerium Blog</h1>
      </header>

      <div class="container">
        <div class="main-blog">
          <div class="blog-post">
            <h2>Main Blog Post Title</h2>
            <p>Main Blog Post Content</p>
          </div>
        </div>

        <div class="sidebar">
          <div class="blog-post">
            <h3>Sidebar Blog Post 1</h3>
            <p>Sidebar Blog Post Content</p>
          </div>
          <div class="blog-post">
            <h3>Sidebar Blog Post 2</h3>
            <p>Sidebar Blog Post Content</p>
          </div>
          <div class="blog-post">
            <h3>Sidebar Blog Post 3</h3>
            <p>Sidebar Blog Post Content</p>
          </div>
        </div>
      </div>
    </>
  );
}
