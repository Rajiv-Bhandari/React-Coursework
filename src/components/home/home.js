import Header from "../header/Header";
import Post from "../posts/posts";
import Sidebar from "../sidebar/sidebar";
import AdminSidebar from "../adminsidebar/adminSidebar";
import "./home.css";

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
        <AdminSidebar />
      </div>
    </>
  );
}
