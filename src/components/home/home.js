import Header from "../header/Header";
import Post from "../posts/posts";
import Sidebar from "../sidebar/sidebar";
import AdminSidebar from "../admin/adminsidebar/adminSidebar";
import Footer from "../footer/footer";

import "./home.css";
// import Contact from "../contact/contact";


export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}
