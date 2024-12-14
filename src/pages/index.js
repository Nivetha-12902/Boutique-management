import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import MyModal from "../components/Modal";
import LoginForm from "./Login";
import SignupForm from "./Registration";
import ForgetPassword from "./Forgetpassword";
import { useNavigate } from "react-router-dom";

export default function Pages({ viewModal, data }) {
  const [show, setShow] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const usersData = data.users;

  // Function to open modal with login form
  const handleLogin = () => {
    setCurrentModal("login");
    setShow(true);
    setSuccessMessage(""); // Clear any previous success message
  };

  // Function to open modal with signup form
  const signuphandleLogin = () => {
    setCurrentModal("signup");
    setShow(true);
    setSuccessMessage(""); // Clear any previous success message
  };

  // Function to switch to the signup form to login modal
  const switchToSignup = () => {
    setCurrentModal("signup");
  };

  // Function to switch to the login form to signup modal
  const switchToLogin = () => {
    setCurrentModal("login");
  };

  // Function to switch to the forgot password modal
  const switchToForgot = () => {
    setCurrentModal("forgot");
  };

  // Function to close the modal
  const handleClose = () => {
    setShow(false);
  };

  // Login button submit function
  const handleLogins = (loginDetails) => {
    console.log("Login details:", loginDetails);

    const isUser = usersData.filter(
      (user) => user.email === loginDetails.userName
    );
    const isPassword =
      isUser.length > 0 ? isUser[0].password === loginDetails.password : false;

    if (isUser.length === 0) {
      setCurrentModal("Confirmation");
      setSuccessMessage("Invalid email"); // Show error in the modal
      return;
    }

    if (!isPassword) {
      setCurrentModal("Confirmation");
      setSuccessMessage("Invalid password"); // Show error in the modal
      return;
    }

    handleClose();

    // Navigation after successful login
    if (isUser[0].name === "Admin") {
      navigate("/admin", { state: { data } }); // Navigate to the admin page
    } else {
      navigate("/user", { state: { data } }); // Navigate to the user page
    }
  };

  // Signup button submit function
  const handleSignups = (signupDetails) => {
    console.log("Signup details:", signupDetails);
    setCurrentModal("Confirmation"); // Show success message modal
    setSuccessMessage("Signup Successful!"); // Set the success message
  };

  // Forgot password submit function
  const handleForgetPassword = (resetDetails) => {
    console.log("Password reset details:", resetDetails);
    setCurrentModal("Confirmation"); // Show success message modal
    setSuccessMessage("Password reset link sent to your email!"); // Set the success message
  };

  useEffect(() => {
    if (viewModal === "Login") {
      handleLogin();
    } else {
      signuphandleLogin();
    }
  }, [viewModal]);

  return (
    <>
      {/* Modal */}
      {show && (
        <MyModal
          title={
            currentModal === "login"
              ? "Login"
              : currentModal === "signup"
              ? "Register"
              : currentModal === "forgot"
              ? "Forgot Password"
              : "Confirmation"
          }
          body={
            currentModal === "login" ? (
              <LoginForm
                onLogin={handleLogins}
                onSwitchToSignup={switchToSignup}
                onSwitchToForgot={switchToForgot}
              />
            ) : currentModal === "signup" ? (
              <SignupForm
                onSignup={handleSignups}
                onSwitchToLogin={switchToLogin}
              />
            ) : currentModal === "forgot" ? (
              <ForgetPassword
                onForgetPassword={handleForgetPassword}
                onSwitchToLogin={switchToLogin}
                handleClose={handleClose}
              />
            ) : (
              <div>
                <p>{successMessage}</p>
                <button
                  onClick={switchToLogin}
                  style={{ width: "100%",backgroundColor:"#9a2c67",color:"white" }}
                >
                  Go to Login
                </button>
              </div>
            )
          }
          show={show}
          close={handleClose}
        />
      )}
    </>
  );
}

