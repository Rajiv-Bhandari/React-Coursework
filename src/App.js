import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './components/home/home';
import About from './components/about/About';
<<<<<<< HEAD
import Blog from "./components/posts/posts"
import Singlepost from "./components/singlePost/singlepost"; 

=======
import Profile from './components/profile/Profile';
import Changepassword from './components/profile/Changepassword';
>>>>>>> 9b2bc52bb9ccb6f71d28e5c6ce43e48fce502bc9

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/post" element={<Blog />} />
        <Route path="/post/singlePost/singlePOST" element={<Singlepost />} /> 


=======
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<Changepassword />} />
>>>>>>> 9b2bc52bb9ccb6f71d28e5c6ce43e48fce502bc9
      </Routes>
    </Router>
  );
}

export default App;