import Footer from "../footer/footer";
import Header from "../header/Header";
import Post from "../posts/posts";
import "./home.css";

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
