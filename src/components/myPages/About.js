import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us-page">

      {/* About Us Section */}
      <div className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-image">
            <img src={require("../../assets/about.jpg")} alt="About Us" />
          </div>
          <div className="about-us-content">
            <p>
            Welcome to Purple Valley, your one-stop destination for stylish, high-quality dresses that cater to all your fashion needs. With a deep-rooted passion for fashion, we aim to bring you the latest trends and timeless pieces to elevate your wardrobe.
          </p>
          <p>
            Our journey began with a commitment to quality and customer satisfaction. Each dress at Purple Valley is carefully crafted and chosen to ensure that you receive only the best. From fabric selection to design and finishing touches, we pay attention to every detail, because we believe that you deserve nothing less.
          </p>
          <p>
            Whether you're looking for an elegant evening gown, a casual day dress, or something in between, our team is here to help you find the perfect fit. Thank you for choosing Purple Valley; we look forward to being a part of your fashion journey and helping you express your unique style.
          </p>
          </div>
        </div>
      </div>
    

      {/* Team Section */}
      <div className="team-section">
        <h2>Our Happy Clients </h2>
        <div className="team-container">
          <div className="team-row">
            {/* Team Member 1 */}
            <div className="team-member">
              <div className="team-card">
                <div className="team-front">
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    alt="Robert Garrison"
                    className="profile-img"
                  />
                  <div className="team-name">Robert Garrison</div>
                  <div className="team-designation">Chennai</div>
                </div>
                <div className="team-back">
                  <span className="quote-left"></span>
                  <div className="testimonial">
                  "Absolutely love the collection at Purple Valley! The dresses are stylish, high-quality, and perfect for any occasion.
                   The customer service was super friendly!"
                  </div>
                  <span className="quote-right"></span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member">
              <div className="team-card">
                <div className="team-front">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Jeffery Kennan"
                    className="profile-img"
                  />
                  <div className="team-name">Jeffery Kennan</div>
                  <div className="team-designation">Bangalore</div>
                </div>
                <div className="team-back">
                  <span className="quote-left"></span>
                  <div className="testimonial">
                  "Shopping here was a delightful experience! The designs are trendy, and the attention to detail is impressive.
                   I felt valued as a customer, and the team was very helpful."
                  </div>
                  <span className="quote-right"></span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member">
              <div className="team-card">
                <div className="team-front">
                  <img
                    src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Issac Maxwell"
                    className="profile-img"
                  />
                  <div className="team-name">Issac Maxwell</div>
                  <div className="team-designation">Mumbai</div>
                </div>
                <div className="team-back">
                  <span className="quote-left"></span>
                  <div className="testimonial">
                  "Purple Valley exceeded my expectations! The fabric quality is excellent, and the fit is perfect.
                   Their service was professional and made me want to shop again!"
                  </div>
                  <span className="quote-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
