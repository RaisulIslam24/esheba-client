import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faBriefcase, faPlus, faUserPlus, faTasks, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="userInfo">
                <img src="https://i.ibb.co/mG1fZpp/shahin.jpg" alt="" />
                <span>Shahin Bhuiyan</span>
            </div>
            <ul className="list-unstyled">
                <div>
                    <li>
                        <Link to="/" className="text-white link">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white link">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white link">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to="/AdminOrderList" className="text-white link">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white link">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white link">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white link">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>

            </ul>
            <div>
                <Link to="/" className="text-white link"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;