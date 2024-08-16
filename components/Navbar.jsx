import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Logo from '../src/assets/img/startupLogo.png';
import Sidebar from './Sidebar';
import "./css/navbar.css"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log(isSidebarOpen)
  };
  

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-btn" onClick={toggleSidebar}>
            <IoMenu />
          </button>
          <img src={Logo} alt="Startup Logo" className="logo" />
          <button className="site-name">startupbundelkhand.com</button>
        </div>
        <div className="navbar-center">
          {['EDUCATION', 'COMMUNITY', 'LIBRARY', 'PRODUCTS'].map((item, index) => (
            <a key={index} href="#" className="nav-link">{item}</a>
          ))}
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-link">ABOUT</a>
          {['Sign In', 'Sign Up'].map((item, index) => (
            <a key={index} href="#" className="sign-btn">{item}</a>
          ))}
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;
