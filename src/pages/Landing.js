import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Landing.css";
import Menu from "../components/Menu";
import Home from "../components/myPages/Home";
import About from "../components/myPages/About";
import Women from "../components/myPages/Women";
import Men from "../components/myPages/Men";
import Kids from "../components/myPages/Kids";
import Contact from "../components/myPages/Contact";
import Pages from ".";

const Landing = () => {
  const [activePage, setActivePage] = useState("Home");
  const [jsonData, setJsonData] = useState([]);
  const [menu, setMenu] = useState("");
  // Track active page
  const handleMenuClick = (page) => {
    setActivePage(page);
    // toggleMenu(); // Close menu on selection
  };
  // const handleButtonClick = (button) => {
  //   setMenu(button);
  // };
  const handleButtonClick=(name)=>{
    console.log("menu in landing...",name);
    if (menu === name) {
      setMenu(""); // Reset the state first
      setTimeout(() => {
        setMenu(name); // Update it again
      }, 0); // Slight delay ensures React processes it as a new state update
    } else {
      setMenu(name); // Normal update
    }
  }
  useEffect(() => {
    fetch("db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User data loaded:", data.users);
        setJsonData(data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <div className="landing-container">
      <Header />
      <Menu
        onMenuClick={handleMenuClick}
        activePage={activePage}
        onButtonClick={handleButtonClick}
      />
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Home" && (
          <div>
            <Home />
          </div>
        )}
        {activePage === "About" && (
          <div>
            <About />
          </div>
        )}
        {activePage === "Women" && (
          <div>
            <Women details={jsonData.products.womenDress} />
          </div>
        )}
        {activePage === "Men" && (
          <div>
            <Men details={jsonData.products.menDress} />
          </div>
        )}
        {activePage === "Kids" && (
          <div>
            <Kids details={jsonData.products.kidsDress} />
          </div>
        )}
        {activePage === "Contact" && (
          <div>
            <Contact />
          </div>
        )}
        {(menu === "Login" || menu === "Register") && (
          <div>
            <Pages viewModal={menu} data={jsonData} />
          </div>
        )}
      </div>
      <main className="landing-content"></main>
      <Footer />
    </div>
  );
};

export default Landing;
