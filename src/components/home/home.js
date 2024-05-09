import Footer from "../footer/footer";
import Header from "../header/Header";
import Post from "../posts/posts";
<<<<<<< HEAD
import Sidebar from "../sidebar/sidebar";
import AdminSidebar from "../adminsidebar/AdminSidebar";
=======
>>>>>>> 5f2b2c55eb5f038d9624dff5cebc98ec862e676e
import "./home.css";
import Contact from "../../contact/contact";

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
<<<<<<< HEAD
        <AdminSidebar />
        <Contact />
=======
>>>>>>> 5f2b2c55eb5f038d9624dff5cebc98ec862e676e
      </div>
      <Footer />
    </>
  );
}
