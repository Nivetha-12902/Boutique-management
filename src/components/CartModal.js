import React, { useState } from "react";
import PaymentModal from "./PaymentModal"; // Import PaymentModal
import MyModal from "../components/Modal"; // Import MyModal for success message
import "./CartModal.css";

const CartModal = ({
  cartItems,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
  closeModal,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Payment modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Success modal visibility

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseInt(item.price.replace(/\D/g, ""), 10) || 0; // Convert price to an integer
    const itemQuantity = parseInt(item.quantity, 10) || 0; // Convert quantity to an integer
    return total + itemPrice * itemQuantity;
  }, 0);

  const handleCheckout = () => {
    setShowPaymentModal(true); // Show the payment modal when checkout is clicked
  };

  const handlePaymentSubmit = (paymentDetails) => {
    console.log("Payment submitted: ", paymentDetails);
    setShowPaymentModal(false); // Close the payment modal
    setShowSuccessModal(true); // Show the success modal
  };

  const handleSizeChange = (itemId, newSize) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, size: newSize } : item
    );
    // Update the cartItems in the parent component (if needed)
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={closeModal}>
          ×
        </button>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-item-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <strong>{item.name}</strong> - Rs.{item.price} × {item.quantity}
                  </div>
                  <div className="cart-item-controls">
                    <span className="size-selection">
                      <label htmlFor={`size-${item.id}`}>Size:</label>
                      <select
                        id={`size-${item.id}`}
                        value={item.size || "M"} // Default size is 'M'
                        onChange={(e) => handleSizeChange(item.id, e.target.value)}
                      >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </span>
                    <span>
                      <button onClick={() => decrementItem(item.id)}>-</button>
                    </span>
                    <span>{item.quantity}</span>
                    <span>
                      <button onClick={() => incrementItem(item.id)}>+</button>
                    </span>
                    <span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total Amount: Rs.{totalAmount}</h3>
            </div>
          </>
        )}
        <div className="cart-modal-actions">
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          closePaymentModal={() => setShowPaymentModal(false)}
          submitPayment={handlePaymentSubmit}
        />
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <MyModal
          title="Payment Successful"
          body="Thank you for your purchase!"
          show={showSuccessModal}
          close={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default CartModal;
