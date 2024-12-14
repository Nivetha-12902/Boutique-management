import React, { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ closePaymentModal, submitPayment }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only letters and spaces.";
    }

    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone Number Validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Phone number must start with 6-9 and be 10 digits long.";
    }

    // Payment Method Validation
    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitPayment({ name, email, phone, paymentMethod });
      // Clear the form after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setPaymentMethod("");
      setErrors({});
    }
  };

  return (
    <div className="payment-modal">
      <div className="payment-modal-content">
        <h2>Payment Details</h2>
        <button className="close-btn" onClick={closePaymentModal}>
          ×
        </button>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select a payment method</option>
              <option value="cashondelivery">Cash On Delivery</option>
              <option value="gpay">Gpay</option>
              <option value="gpay">Phonepe</option>
              <option value="gpay">Paytm</option>
            </select>
            {errors.paymentMethod && (
              <span className="error">{errors.paymentMethod}</span>
            )}
          </div>

          <div className="modal-actions">
            <button type="submit">Submit Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
