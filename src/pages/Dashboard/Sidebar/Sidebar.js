import React, { useContext, useState } from 'react';
import './Sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentAlt, faBriefcase, faPlus, faUserPlus, faTasks, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import {
    MailOutline,
    People,
    PersonAdd,
    RateReview,
    AddShoppingCart,
    Redeem,
    Home,
    ExitToApp
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser)

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    {loggedInUser.role === 'admin' &&
                        <>
                            <h3 className="sidebarTitle">Admin Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/serviceList" className="sidebarListItem link ">
                                    <Redeem className="sidebarIcon" />
                                    All Services
                                </Link>
                                <Link to="/consumersList" className="sidebarListItem link">
                                    <People className="sidebarIcon" />
                                    Service Consumers
                                </Link>
                                <Link to='/serviceProvidersList' className="sidebarListItem link">
                                    <People className="sidebarIcon" />
                                    Service Providers
                                </Link>

                                <Link to="/orderList" className="sidebarListItem link">
                                    <MailOutline className="sidebarIcon" />
                                    Order List
                                </Link>
                                <Link to="/makeAdmin" className="sidebarListItem link">
                                    <PersonAdd className="sidebarIcon" />
                                    Make Admin
                                </Link>
                                <Link to="/addService" className="sidebarListItem link">
                                    <AddShoppingCart className="sidebarIcon" />
                                    Add Services
                                </Link>
                            </ul>
                        </>
                    }

                    {loggedInUser.role === 'service-provider' &&
                        <>
                            <h3 className="sidebarTitle">Service Provider Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/" className="sidebarListItem link ">
                                    <Redeem className="sidebarIcon" />
                                    Services
                                </Link>
                                <Link to="/addService" className="sidebarListItem link">
                                    <AddShoppingCart className="sidebarIcon" />
                                    Add Services
                                </Link>
                            </ul>
                        </>
                    }

                    {loggedInUser.role === 'consumer' &&
                        <>
                            <h3 className="sidebarTitle">Service Taker Panel</h3>
                            <ul className="sidebarList">
                                <Link to="/review" className="sidebarListItem link">
                                    <RateReview className="sidebarIcon" />
                                    Add Review
                                </Link>
                                <Link to="/" className="sidebarListItem link">
                                    <RateReview className="sidebarIcon" />
                                    Order List
                                </Link>
                            </ul>
                        </>
                    }
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="sidebarListItem link active ">
                            <Home className="sidebarIcon" />
                            Home
                        </Link>
                        <li className="sidebarListItem link">
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;



{/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem link">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem link">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem link">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div> */}
{/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem link">
                            <WorkOutline className="sidebarIcon" />
                            Make Admin
                        </li>
                        <li className="sidebarListItem link">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem link">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div> */}