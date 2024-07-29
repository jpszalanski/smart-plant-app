import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import Login from './Login';  
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/App.css';
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
