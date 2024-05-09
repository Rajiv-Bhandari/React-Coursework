import Header from "../header/Header";
import Post from "../posts/posts";
import Sidebar from "../sidebar/sidebar";
import AdminSidebar from "../adminsidebar/AdminSidebar";
import "./home.css";

export default function home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
<<<<<<< HEAD
        <Sidebar />
        <AdminSidebar />
=======
>>>>>>> 6d6b88e89dba9aaa1bf4be927e4266ff098e8e62
      </div>
    </>
  );
}
