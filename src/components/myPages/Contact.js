import React, { useState } from "react";
import "./Contact.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyModal from "../../components/Modal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [modalShow, setModalShow] = useState(false); // Modal visibility state
  const [modalContent, setModalContent] = useState(""); // Modal content state

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.rating.trim()) {
      newErrors.rating = "Rating is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setModalContent("Thank you for your feedback!");
      setModalShow(true); // Show the modal
      setFormData({ name: "", email: "", rating: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contactus" id="contactus">
      <div className="container1">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-md-6">
            <div className="contact-form">
              <h2>Feedback</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.rating ? "is-invalid" : ""
                    }`}
                    placeholder="Rating"
                  />
                  {errors.rating && (
                    <div className="invalid-feedback">{errors.rating}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="btn-purple">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.820701404115!2d77.0148313145029!3d11.004528591447726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d7e62f60f2e9%3A0x9681f798b84794e8!2sGandhipuram%20Cross%20Cut%20Road%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699349026698!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Additional Contact Information Section */}
        <div className="contact-info row mt-4 p-4">
          <div className="col-md-4">
            <h3>Our Address</h3>
            <p>123 Cross Cut Road, Gandhipuram, Coimbatore</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Contact</h3>
            <p>
              <strong>Phone:</strong> +91 9876543210.
            </p>
            <p>
              <strong>Email:</strong> contact@purplevalley.com
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Submission */}
      <MyModal
        show={modalShow}
        close={() => setModalShow(false)}
        title="Feedback"
        body={modalContent}
      />
    </div>
  );
};

export default Contact;
