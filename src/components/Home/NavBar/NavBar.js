import React, { useContext } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../images/default-monochrome.svg'
import { userContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser] = useContext(userContext);

    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    className="d-inline-block align-top w-50 ms-4"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle variant="dark" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-5">

                    <Link className="navLink link" to="/">Home </Link>
                    <Link className="navLink link" to="/services">Services </Link>
                    <Link className="navLink link" to="/blogs">Blogs </Link>
                    <Link className="navLink link" to="/about">About </Link>
                    <Link className="navLink link" to="/dashboard">Dashboard</Link>
                    {
                        loggedInUser.email ?
                            <Image className="userImage navLink" src={loggedInUser.photo} alt={loggedInUser.name} style={{ width: '40px', height: '40px' }} roundedCircle />
                            :
                            <Link className="navLink link" to="/login">Login</Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;