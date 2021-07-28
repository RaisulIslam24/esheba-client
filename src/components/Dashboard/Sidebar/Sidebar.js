import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faBriefcase, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {!isAdmin && <div>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                </div>
                }
                {isAdmin && <div>
                    <li>
                        <Link to="/AdminOrderList" className="text-white">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;