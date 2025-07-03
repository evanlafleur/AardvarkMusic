// 2. App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFCF2] text-[#252422]">
      <Navbar />
      <Routes>
              <Link to="/">Home (test link)</Link>

      </Routes>
    </div>
  );
}

export default App;
