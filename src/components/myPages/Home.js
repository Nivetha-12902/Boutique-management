import React from 'react';
import { Carousel } from 'react-bootstrap';
import About from '../../components/myPages/About';
import Contact from '../../components/myPages/Contact';
const Home = () => {
  return (
    <>
      <Carousel className="responsive-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require('../../assets/caro1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Women</h3>
            <p> Elegant and vibrant dresses designed for modern women</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require('../../assets/caros.2.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Men</h3>
            <p>Classic and stylish attire for men.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require('../../assets/caro3.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Kids</h3>
            <p>Fun, colorful, and comfortable clothing designed for kids.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
