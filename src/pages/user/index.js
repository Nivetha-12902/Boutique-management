import React, { useState,useEffect } from "react";
import Header from "../user/Header";
import Footer from "../../components/Footer";
import "../../pages/Landing.css";
import Menu from "../user/Menu";
import Home from "../../components/myPages/Home";
import About from "../../components/myPages/About";
import Women from "../user/Women";
import Men from "../user/Men";
import Kids from "../user/Kids";
import Contact from "../../components/myPages/Contact";
import MyOrders from "./MyOrders";
import { useNavigate,useLocation } from "react-router-dom";
import CartModal from "../../components/CartModal";

const User = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const [jsonData, setJsonData] = useState([]);
  const { data } = location.state || {};
  console.log("data from nav",(data));




  const [activePage, setActivePage] = useState("Home");



  const[menu,setMenu]=useState("");
  
   // Track active page
  const handleMenuClick = (page) => {
    if (page === "Logout") {
      // Perform any logout logic, e.g., clear user data
      // Redirect to the landing page
      navigate("/"); // Adjust "/landing" to your landing page route
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
  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Increment item quantity
  const incrementItem = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Decrement item quantity
  const decrementItem = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Remove item from the cart
  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  // Clear all items
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <div className="landing-container">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} toggleCartModal={toggleCartModal} />
      <Menu onMenuClick={handleMenuClick} activePage={activePage} onButtonClick={handleButtonClick}/>
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
            <Women  details={data.products.womenDress} addToCart={addToCart}/>
          </div>
        )}
        {activePage === "Men" && (
          <div>
            <Men  details={data.products.menDress}addToCart={addToCart} />
          </div>
        )}
        {activePage === "Kids" && (
          <div>
         <Kids  details={data.products.kidsDress} addToCart={addToCart} />
          </div>
        )}
        {activePage === "Contact" && (
          <div>
            <Contact />
          </div>
        )}
        {/* {activePage === "Logout" && (
          <div>
            <Logout/>
          </div>
        )} */}
         {activePage === "MyOrders" && (
          <div>
            <MyOrders orders={jsonData.table.orders} data={jsonData}/>
          </div>
        )}
        {/* {(menu==="Login"|| menu==="Register")&&(
          <div>
            <Pages viewModal={menu}/>
            </div>
        )} */}
      </div>
      <main className="landing-content"></main>
      <Footer />
      {isCartModalOpen && (
        <CartModal
          cartItems={cartItems}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          removeItem={removeItem}
          clearCart={clearCart}
          closeModal={toggleCartModal}
        />
      )}
    </div>
  );
};

export default User;
