import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default class NavContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar className="navbar" expand="lg" style={{boxShadow: "0px 2px 11px 0px rgba(0,0,0,0.75)"}}>
        <Navbar.Brand href="#home" style={{fontStyle: 'italic', textDecoration: 'underline', textDecorationColor: 'white'}}>
            <span style={{color: 'red'}}>No</span>    
            <span style={{color: 'white'}}> Mo'</span>
            <span style={{color: 'blue'}}> Mosquito</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color: 'red'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="about">About</Nav.Link>
            <Nav.Link style={{color: 'blue'}} href="contact">Contact Us</Nav.Link>
            <Nav.Link style={{color: 'red'}} href="services">Services</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
