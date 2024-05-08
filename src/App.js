import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './components/home/home';
import About from './components/about/About';
import Profile from './components/profile/Profile';
import Changepassword from './components/profile/Changepassword';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<Changepassword />} />
      </Routes>
    </Router>
  );
}

export default App;