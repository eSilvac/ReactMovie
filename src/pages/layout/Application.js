import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

class Application extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">Populars</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/popular">Populars</Link>
              <Link className="nav-link" to="/upcoming">Upcoming</Link>
              <Link className="nav-link" to="/now-playing">Now Playing</Link>
              <Link className="nav-link" to="/top-rated">Top Rated</Link>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
  }
}

export default Application;
