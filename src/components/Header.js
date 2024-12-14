import React from "react";
import "./Header.css";
function Header(){  
  return (
    <header className="header-container">
      <div className="header-logo">
        <img
          src={require("../assets/logo2.png")}
          alt="Logo"
          className="logo-img"
        />
      </div>
      <div style={{ textAlign: "center", width: "100%", color: "#6d2480",fontFamily:"Sitka Small Semibold",}}>
        <h1>Purple Valley</h1>
      </div>
    </header>
  );
};

export default Header;
