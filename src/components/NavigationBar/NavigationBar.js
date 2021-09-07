import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand, .navbar-nav .nav-link {
    
    &:hover {
      color: white;
    }
  }
`;


const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">House Duje</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link as={Link} to="/about">About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link as={Link} to="/gallery">Gallery
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link as={Link} to="/contact">Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
   
)

export default NavigationBar;