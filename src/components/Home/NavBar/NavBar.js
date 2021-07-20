import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
            {/* <img
                src={logo}
                width="200px"
                className="d-inline-block align-top"
                alt="Store 2 Door"
            /> */}
            <h3 className="ms-3">E-Sheba</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                
                <Link className="link" to="/home">Home </Link>
                <Link className="link" to="/services">Services </Link>
                <Link className="link" to="/blogs">Blogs </Link>
                <Link className="link" to="/contact">Contact </Link>
                <Link className="link" to="/about">About </Link>
                <Link className="link" to="/login">Login </Link>
                {/* Dynamically change login button to user image */}
                {/* {
                    loggedInUser.email ? <Image src={loggedInUser.photo} alt={loggedInUser.name} style={{width:'40px', height:'40px', marginRight:'60px'}} roundedCircle/> : <Link className="link" to="/login"><button id="login-btn">Login</button></Link>
                } */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;