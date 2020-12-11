import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";

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
              src="holder.js/800x400?text=First slide&bg=373940"
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
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
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
        <Navbar className="navbar" bg="black" expand="lg" />
        <div className="home-content" style={{ height: "80vh" }}>
          <div className="rowOne">
            <div className="oneOne">
              <h2>Services</h2>
              <h4>Check Out Our Services!</h4>
            </div>
            <div className="oneTwo">
              <h2>About</h2>
              <h4>Learn How We Started!</h4>
            </div>
            <div className="oneThree">
              <h2>Contact Us</h2>
              <h4>We'd love to hear from you!</h4>
            </div>
          </div>
          <div className="rowTwo">-</div>
        </div>
      </div>
    );
  }
}
