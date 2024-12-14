import { useState } from "react";

function SignupForm({ onSignup, onSwitchToLogin }) {
  // state for managing form input values
  const [signupDetails, setSignupDetails] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword: "",
    mobileNumber: "",
    gender: "",
    address: "",
    pincode: "",
  });

  // state for managing error messages
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword: "",
    mobileNumber: "",
    gender: "",
    address: "",
    pincode: "",
  });

  // Regex patterns for validation
  const userNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/-]).{8,16}$/;
  const pincodeRegex = /^[1-9][0-9]{5}$/;

  // handle changes in input fields
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // validate form inputs
  const validateSignupForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!signupDetails.userName) {
      newErrors.userName = "UserName is required";
      formIsValid = false;
    } else if (!userNameRegex.test(signupDetails.userName)) {
      newErrors.userName = "Please enter a valid UserName";
      formIsValid = false;
    }

    if (!signupDetails.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(signupDetails.email)) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    }

    if (!signupDetails.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
      formIsValid = false;
    } else if (!mobileRegex.test(signupDetails.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid Mobile number";
      formIsValid = false;
    }

    if (!signupDetails.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (!passwordRegex.test(signupDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, with at least one uppercase letter, one number, and one special character";
      formIsValid = false;
    }

    if (!signupDetails.conformPassword) {
      newErrors.conformPassword = "Confirm Password is required";
      formIsValid = false;
    } else if (signupDetails.conformPassword !== signupDetails.password) {
      newErrors.conformPassword = "Password doesn't match";
      formIsValid = false;
    }

    if (!signupDetails.gender) {
      newErrors.gender = "Gender is required";
      formIsValid = false;
    }

    if (!signupDetails.address) {
      newErrors.address = "Address is required";
      formIsValid = false;
    }

    if (!signupDetails.pincode) {
      newErrors.pincode = "Pincode is required";
      formIsValid = false;
    } else if (!pincodeRegex.test(signupDetails.pincode)) {
      newErrors.pincode = "Please enter a 6 digit valid Pincode";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (validateSignupForm()) {
      onSignup(signupDetails);
    }
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSignupSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={signupDetails.userName}
              onChange={handleSignupChange}
            />
            {errors.userName && <div style={{ color: "red" }}>{errors.userName}</div>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="form-label">
              E-Mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={signupDetails.email}
              onChange={handleSignupChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={signupDetails.password}
              onChange={handleSignupChange}
            />
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="conformPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="conformPassword"
              value={signupDetails.conformPassword}
              onChange={handleSignupChange}
            />
            {errors.conformPassword && (
              <div style={{ color: "red" }}>{errors.conformPassword}</div>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="mobileNumber"
              value={signupDetails.mobileNumber}
              onChange={handleSignupChange}
            />
            {errors.mobileNumber && <div style={{ color: "red" }}>{errors.mobileNumber}</div>}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-control"
              name="gender"
              value={signupDetails.gender}
              onChange={handleSignupChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              name="address"
              value={signupDetails.address}
              onChange={handleSignupChange}
            />
            {errors.address && <div style={{ color: "red" }}>{errors.address}</div>}
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              value={signupDetails.pincode}
              onChange={handleSignupChange}
            />
            {errors.pincode && <div style={{ color: "red" }}>{errors.pincode}</div>}
          </div>

          {/* Submit Button */}
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
            SignUp
          </button>

          {/* Switch to Login */}
          <button
            type="button"
            onClick={onSwitchToLogin}
            style={{
              background: "none",
              border: "none",
              color: "#6d2482",
              textDecoration: "underline",
              marginTop: "10px",
              width: "100%",
            }}
          >
            Already have an account? Login
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
