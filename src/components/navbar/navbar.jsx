import '../../App.css';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container,Form, FormControl, Button } from 'react-bootstrap';

class Navbars extends Component {
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Moments</Nav.Link>
                        <Nav.Link href="#Messages">Messages</Nav.Link>
                        <Nav.Link href="#notification">Notification</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search Tweet"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="info">Tweet</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navbars;