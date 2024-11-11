import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './image/Habiba.png'
import './navbar.css'
import { CiShoppingCart } from "react-icons/ci";

function Navbarok() {
  return (
    <Navbar expand="lg" className="bodyColur">
      <Container fluid>
        <Navbar.Brand href="#"><img className="logo" src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Baba" className="babababycenter" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">cotton</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Malai jarsi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Winter collection
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Baby" className="babybaba" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Jali</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Malai jarsi 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Winter collection
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CiShoppingCart fontSize={50} />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarok;