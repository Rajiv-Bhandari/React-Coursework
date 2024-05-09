import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './components/home/home';
import About from './components/about/About';
import Blog from "./components/posts/posts";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;