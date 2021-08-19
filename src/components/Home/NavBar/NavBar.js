import React, { useContext } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../images/default-monochrome.svg'
import { userContext } from '../../../App';
import cover from '../../../img/E-Sheba-logo/cover.png';
const NavBar = () => {

    const [loggedInUser] = useContext(userContext)
    console.log(loggedInUser)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    className="d-inline-block align-top w-50 ms-4"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-5">

                    <Link className="navLink" to="/">Home </Link>
                    <Link className="navLink" to="/services">Services </Link>
                    <Link className="navLink" to="/blogs">Blogs </Link>
                    <Link className="navLink" to="/about">About </Link>
                    <Link className="navLink" to="/dashboard">Dashboard</Link>
                    {/* <Link className="navLink" to="/login">Login </Link> */}
                    {/* Dynamically change login button to user image */}
                        {
                            loggedInUser.email ?
                                <Link class="navLink" to="/login" tabindex="-1">{loggedInUser.name}</Link> :
                                <Link class="navLink" to="/login" tabindex="-1">login</Link>
                        }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;