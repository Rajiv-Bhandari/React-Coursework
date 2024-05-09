import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './components/home/home';
import About from './components/about/About';
import Blog from "./components/posts/posts"
import Singlepost from "./components/singlePost/singlepost"; 
import LoginSignup from "./components/loginsignup/loginsignup"; 
// import AdminSidebar from "./components/adminsidebar/AdminSidebar";

import Profile from './components/profile/Profile';
import Changepassword from './components/profile/Changepassword';
import AddPost from './components/posts/Addpost';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Blog />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/post/singlePOST" element={<Singlepost />} /> 


        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<Changepassword />} />
        {/* <Route path="/adminsidebar" element={<AdminSidebar />} />  */}

      </Routes>
    </Router>
  );
}

export default App;