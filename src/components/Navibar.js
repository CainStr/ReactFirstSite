import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar = () => {
  return (
  <>

    <Navbar collapseOSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>WebDev Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responnsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
          <Nav.Link><Link to='/about'>About</Link></Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className='mr-2'>Log In</Button>
          <Button variant="primary">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  </>)
};

export default NaviBar;
