import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const FooterContainer = () => {
  return (
    <div className="footer navbar">
      <div className="content">
        <Navbar.Brand
          href="/"
          style={{
            fontStyle: "italic",
            textDecoration: "underline",
            textDecorationColor: "white",
            marginRight: "5%",
          }}
        >
          <span style={{ color: "red" }}>No</span>
          <span style={{ color: "white" }}> Mo'</span>
          <span style={{ color: "blue" }}> Mosquito</span>
        </Navbar.Brand>
        <Nav className="mr-footer">
          <Nav.Link className="nav-link red" style={{ color: "red" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link
            className="nav-link white"
            style={{ color: "white" }}
            href="about"
          >
            About
          </Nav.Link>
          <Nav.Link
            className="nav-link blue"
            style={{ color: "blue" }}
            href="contact"
          >
            Contact Us
          </Nav.Link>
          <Nav.Link
            className="nav-link red"
            style={{ color: "red" }}
            href="services"
          >
            Services
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default FooterContainer;
