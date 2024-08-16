import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./css/sidebar.css";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const { scrollTop } = sidebarRef.current;
        sidebarRef.current.classList.toggle('scrolled', scrollTop > 0);
      }
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Signup</a></li>
          <li className="menu-section">
            <span>EDUCATION</span>
            <ul>
              <li><a href="#">Founder</a></li>
              <li><a href="#">Idea</a></li>
              <li><a href="#">Formation</a></li>
              <li><a href="#">Planning</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Funding</a></li>
              <li><a href="#">Operations</a></li>
            </ul>
          </li>
          <li className="menu-section">
            <span>COMMUNITY</span>
            <ul>
              <li><a href="#">Founder Groups</a></li>
              <li><a href="#">Discussions</a></li>
              <li><a href="#">Questions</a></li>
              <li><a href="#">Experts</a></li>
              <li><a href="#">Podcast</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;