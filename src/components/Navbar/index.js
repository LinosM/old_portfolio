import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function NavbarH() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand><a className="navbar-brand logo" href="/">Duy Nguyen</a></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/Home">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" as={Link} to="/Portfolio">
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" as={Link} to="/Resume">
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4" as={Link} to="/Contact">
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarH;
