import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar2 = () => {
    return (
        <Navbar expand="lg" bg="white" variant="dark">
      <Container>
        
        <Navbar.Toggle className="bg-black" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ul class="navbar-nav ">
                            <li class="nav-item px-5">
                                <a className="nav-link active text-black  navlinks px-2 py-4" aria-current="page" to="/home">Home</a>
                            </li>
                            <li class="nav-item px-5">
                                <a className="nav-link active text-black navlinks px-2 py-4"
                                    to="/products">Products</a>
                            </li>
                            <li class="nav-item px-5">
                                <a class="nav-link active text-black  navlinks px-2 py-4" to="/contact">Contact</ a>
                            </li>
                            <li class="nav-item px-5">
                                <a class="nav-link active text-black  navlinks px-2 py-4" to="/about">About</a>
                            </li>
                        </ul>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navbar2;