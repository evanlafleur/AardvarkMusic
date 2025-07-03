
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-[#CCC5B9] shadow-md">
    <ul className="flex gap-6">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gallery">Before/After</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;