import React, { useState } from 'react';
import './Menu.css';
import { FaBars, FaBoxes, FaCogs, FaHome, FaReceipt, FaSignOutAlt, FaTimes, FaUsers } from 'react-icons/fa';
import { FaSignHanging } from 'react-icons/fa6';

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
          className={`menu-link ${activePage === 'Stock' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Stock')}
        >
        <FaBoxes/> <strong> Stock </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Orders' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Orders')}
        >
         <FaReceipt/><strong> Orders </strong>
        </span>
         <span
          className={`menu-link ${activePage === 'Products' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Products')}
        >
         <FaCogs/><strong>Manage Products </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'UserDetails' ? 'active' : ''}`}
          onClick={() => handleMenuClick('UserDetails')}
        >
         <FaUsers/><strong> Customer Details </strong>
        </span>
        <span
          className={`menu-link ${activePage === 'Logout' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Logout')}
        >
         <FaSignOutAlt/><strong> Logout </strong>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
