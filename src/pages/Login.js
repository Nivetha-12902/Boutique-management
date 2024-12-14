import { useState } from "react";

function LoginForm({ onLogin, onSwitchToSignup, onSwitchToForgot }) {
  // State for managing form input values
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  // State for managing error messages
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password Validation Regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  // Handle changes in input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form inputs
  const validateLoginForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!loginDetails.userName) {
      newErrors.userName = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(loginDetails.userName)) {
      newErrors.userName = "Please enter a valid email address";
      formIsValid = false;
    }

    if (!loginDetails.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (!passwordRegex.test(loginDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters with uppercase, lowercase, symbol, and number";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      onLogin(loginDetails);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            name="userName"
            value={loginDetails.userName}
            onChange={handleLoginChange}
          />
          {errors.userName && (
            <div style={{ color: "red" }}> {errors.userName}</div>
          )}
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={loginDetails.password}
            onChange={handleLoginChange}
          />
          {errors.password && (
            <div style={{ color: "red" }}> {errors.password}</div>
          )}
        </div>
        <button
          type="button"
          style={{
            color: "#6d2480",
            textDecoration: "underline",
            background: "none",
            border: "none",
            padding: "0",
          }}
          onClick={onSwitchToForgot}
        >
          Forgot Password?
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: "#9a2c67",
            color: "white",
            border: "none",
            padding: "10px",
            marginTop: "10px",
            width: "100%",
          }}
        >
          Login
        </button>
        <p style={{ color: "#6d2480", marginTop: "10px" }}>
          Don't have an account?{" "}
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              color: "#6d2480",
              textDecoration: "underline",
            }}
            onClick={onSwitchToSignup}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
