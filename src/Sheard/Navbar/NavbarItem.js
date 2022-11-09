import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContex/AuthProvider';

const NavbarItem = () => {

    const { logOut, user } = useContext(AuthContext)

    const handleLgoOut = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }

    return (
        <div className=' bg-slate-900   '>
            <Navbar collapseOnSelect expand="lg" className='shadow p-3'>
                <Container>
                    <Navbar.Brand href="#home"><span className='text-green-800 font-bold text-3xl'>Food</span> <span className='text-orange-500 font-bold text-3xl'>Service</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link className='text-decoration-none text-lg font-semibold' to='/'>
                                <Nav.Link href="#features"><span className='text-orange-500'>Home</span></Nav.Link>
                            </Link>
                            <Link className='text-decoration-none text-lg font-semibold ' to='/blogs'>
                                <Nav.Link href="#features"><span className='text-orange-500'>Blogs</span></Nav.Link>
                            </Link>
                            {
                                user?.uid ?

                                    <>
                                        <Link className='text-decoration-none text-lg font-semibold' to='/myReview'>
                                            <Nav.Link href="#features"><span className='text-orange-500'>My Review</span></Nav.Link></Link>

                                        <Link className='text-decoration-none text-lg font-semibold' to='/addItem'>
                                            <Nav.Link href="#features"><span className='text-orange-500'>Add Food</span></Nav.Link></Link>

                                    </> : <p className='d-none'>no uer</p>


                            }
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.uid ? <>
                                        <Button variant="warning" onClick={handleLgoOut}>Log out</Button>
                                    </> :
                                        <Link to='/signup'><Button variant="warning">Sign up</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarItem;