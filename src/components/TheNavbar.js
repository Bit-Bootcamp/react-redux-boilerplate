import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function TheNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/">
          Bit Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/categories/*">
                Category 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                Category 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                Category 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categories">
                All Categories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
