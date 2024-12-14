import React, { useState } from 'react';
import './Menu.css';
import { FaBars, FaChild, FaEnvelope, FaFemale, FaHome, FaInfoCircle, FaMale, FaSignInAlt, FaTimes, FaUserPlus } from 'react-icons/fa';

const Menu = ({ onMenuClick, activePage,onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open and close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu item click
  const handleMenuClick = (page) => {
    if(page==="Login"||page==="Register"){
      onButtonClick(page);
    }else{
      onMenuClick(page);
    }
    toggleMenu(); // Close the menu on selection
  };

  return (
    <nav className="menu-container">
      <div className="menu-bar">
        {/* Burger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menu Labels */}
      <div className={`menu-links ${isOpen ? 'show-menu' : ''}`}>
        <span
          className={`menu-link ${activePage === 'Home' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Home')}
        >
        <FaHome/> <strong> Home </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'About' ? 'active' : ''}`}
          onClick={() => handleMenuClick('About')}
        >
         <FaInfoCircle /> <strong> About </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Women' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Women')}
        >
         <FaFemale/><strong> Women </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Men' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Men')}
        >
        <FaMale/> <strong> Men </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Kids' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Kids')}
        >
        <FaChild/> <strong> Kids </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Contact' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Contact')}
        >
        <FaEnvelope/> <strong> Feedback </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Login' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Login')}
        >
        <FaSignInAlt/> <strong> Login </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Register' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Register')}
        >
        <FaUserPlus/> <strong> Register </strong>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
