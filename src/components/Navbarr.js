import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbarr.css';

function Navbarr() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#">SouSou Closet</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#dresses">Dresses </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    Tops
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    Bottoms
                </NavDropdown.Item>
                <NavDropdown.Item href="#accessories">
                    Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                    Sale
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Navbarr