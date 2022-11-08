import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NavbarItem = () => {
    return (
        <div className='bg-sky-100 sticky top-0 '>
            <Navbar collapseOnSelect expand="lg" className='shadow p-3'>
                <Container>
                    <Navbar.Brand href="#home"><span className='text-green-800 font-bold text-3xl'>Travel</span> <span className='text-orange-500 font-bold text-3xl'>Country</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link className='text-decoration-none' to='/'><Nav.Link href="#features">Home</Nav.Link></Link>
                            <Link className='text-decoration-none' to='/blogs'><Nav.Link href="#features">Blogs</Nav.Link></Link>


                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarItem;