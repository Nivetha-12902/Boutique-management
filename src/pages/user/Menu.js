import React, { useState } from 'react';
import './Menu.css';
import { FaBars, FaChild, FaClipboardList, FaFemale, FaHome, FaMale, FaSignOutAlt, FaTimes } from 'react-icons/fa';

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
        {/* <span
          className={`menu-link ${activePage === 'About' ? 'active' : ''}`}
          onClick={() => handleMenuClick('About')}
        >
         <strong> About </strong>
        </span> */}
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
         <FaChild/><strong> Kids </strong>
        </span>
         <span
          className={`menu-link ${activePage === 'MyOrders' ? 'active' : ''}`}
          onClick={() => handleMenuClick('MyOrders')}
        >
         <FaClipboardList/><strong> My Orders </strong>
        </span> 
        {/* <span
          className={`menu-link ${activePage === 'Update' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Update')}
        >
         <strong> Update </strong>
        </span> */}
        <span
          className={`menu-link ${activePage === 'Logout' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Logout')}
        >
        <FaSignOutAlt/> <strong> Logout </strong>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
