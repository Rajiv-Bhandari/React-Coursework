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
