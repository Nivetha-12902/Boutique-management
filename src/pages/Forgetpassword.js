import React, { useState } from "react";
import "./Forgetpassword.css";

function ForgetPassword({ handleClose, onForgetPassword, onSwitchToLogin, title }) {
  const [contactInfo, setContactInfo] = useState("");
  const [resetStage, setResetStage] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    contactInfo: "",
    password: "",
    confirmPassword: "",
  });

  // Handle verification step
  const handleVerify = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let contactErrors = { contactInfo: "" };

    if (!contactInfo) {
      contactErrors.contactInfo = "Please enter your email.";
    } else if (!emailPattern.test(contactInfo)) {
      contactErrors.contactInfo = "Enter a valid email.";
    }

    setErrors(contactErrors);

    if (!contactErrors.contactInfo) {
      setResetStage(true); // Move to reset password form if valid
    }
  };

  // Handle password reset step
  const handleResetSubmit = (e) => {
    e.preventDefault();

    let resetErrors = { password: "", confirmPassword: "" };
    let valid = true;

    if (!password) {
      valid = false;
      resetErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password)
    ) {
      valid = false;
      resetErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one digit, and one special character.";
    }

    if (password !== confirmPassword) {
      valid = false;
      resetErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(resetErrors);

    if (valid) {
      const resetDetails = {
        contactInfo,
        newPassword: password,
      };
      onForgetPassword(resetDetails); // Pass details back to parent
    }
  };

  return (
    <div>
      <h3>{title}</h3>

      {!resetStage ? (
        <form onSubmit={handleVerify} noValidate>
          <div className="form-group mb-3">
            <label htmlFor="contactInfo" className="form-label">
              Enter your email
            </label>
            <input
              type="text"
              className="form-control"
              id="contactInfo"
              name="contactInfo"
              placeholder="Email"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
            {errors.contactInfo && (
              <div className="error-message">{errors.contactInfo}</div>
            )}
          </div>
          <button type="submit" className="btn-submit">
            Verify
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit} noValidate>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          <button type="submit" className="btn-submit">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ForgetPassword;
