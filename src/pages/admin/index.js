import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import "../../pages/Landing.css";
import Menu from "../admin/Menu";
import Stock from "./Stock";
import Orders from "./Orders";
import UserDetails from "./UserDetails";
import ManageProducts from "./ManageProducts";
import AdminHome from "./AdminHome";
import "../../pages/admin/index.css";
// import { data } from "@remix-run/router";

const Admin = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activePage, setActivePage] = useState("Home");
  const[menu,setMenu]=useState("");
  const [jsonData, setJsonData] = useState([]);
   // Track active page
  const handleMenuClick = (page) => {
    if (page === "Logout") {
      // Perform logout logic, e.g., clear session storage or authentication tokens
      // Redirect to the landing page
      navigate("/"); // Adjust "/landing" to match your landing page route
    } else {
    setActivePage(page);
    }
    // toggleMenu(); // Close menu on selection
  };
  const handleButtonClick=(button)=>{
    setMenu(button);
  };
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
    <div className="landing-container1">
      <Header />
      <Menu onMenuClick={handleMenuClick} activePage={activePage} onButtonClick={handleButtonClick}/>
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Home" && (
          <div>
            <AdminHome/>
          </div>
        )}
        {activePage === "Stock" && (
          <div>
            <Stock stock={jsonData?.table?.stock} data={jsonData}/>
          </div>
        )}
        {activePage === "Orders" && (
          <div>
            <Orders payment={jsonData?.table?.payment} data={jsonData}/>
          </div>
        )}
         {activePage === "Products" && (
          <div>
            <ManageProducts/>
          </div>
        )}
        {activePage === "UserDetails" && (
          <div>
            <UserDetails userDetails={jsonData?.table?.userDetails} data={jsonData}/>
          </div>
        )}
      </div>
      <main className="landing-content1"></main>
      <Footer />
    </div>
  );
};

export default Admin;
