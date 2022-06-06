import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
    <Container>
      <LinkContainer to="/">
          <Navbar.Brand >Proshop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {/* ms-left align or me right align */}
        <Nav className="ms-auto">
        <LinkContainer to="/cart" >
            <Nav.Link className='fas fa-shopping-cart' href="/cart"> cart </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/user">
            <Nav.Link className='fas fa-user' href="/login"> sign in</Nav.Link>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
