import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import CarouselOne from "../../photos/pexels-elevate-1267337.jpg";
import CarouselTwo from "../../photos/pexels-movidagrafica-barcelona-1474993.jpg";
import CarouselThree from "../../photos/pexels-pixabay-279949.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-wrapper">
        <Carousel className="carousel" expand="lg">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselTwo}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Navbar
          className="navbar"
          bg="black"
          expand="lg"
          style={{ boxShadow: "11px 2px 2px 0px rgba(0,0,0,0.75)" }}
        />
        <div className="home-content" style={{ height: "80vh" }}>
          <div className="rowOne">
            <div className="oneOne">
              <a href="/services">
                <h2>Services</h2>
                <h4>Check Out Our Services!</h4>
              </a>
            </div>
            <div className="oneTwo">
              <a href="/about">
                <h2>About</h2>
                <h4>Learn How We Started!</h4>
              </a>
            </div>
            <div className="oneThree">
              <a href="/contact">
                <h2>Contact Us</h2>
                <h4>We'd love to hear from you!</h4>
              </a>
            </div>
          </div>
          <div className="rowTwo">-</div>
        </div>
      </div>
    );
  }
}
