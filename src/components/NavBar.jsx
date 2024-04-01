import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <NavLink to="/" as={NavLink} className='brand navbar-brand'>Lanas Nadia</NavLink>
            <Nav className="navBar me-auto">
              <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
              <Nav.Link to="/category/verano" as={NavLink} >Verano</Nav.Link>
              <Nav.Link to="/category/invierno" as={NavLink} >Invierno</Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>
    </>
    )
}