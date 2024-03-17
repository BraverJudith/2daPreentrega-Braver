import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand className='brand' href="#home">Lanas Nadia</Navbar.Brand>
            <Nav className="navBar me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobrenosotros">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>
    </>
    )
}