import React, { useContext, useState } from 'react';
import './Sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentAlt, faBriefcase, faPlus, faUserPlus, faTasks, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Report,
    WorkOutline,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    return (
        // <div className="sidebar">
        //     <div className="userInfo">
        //         <img src={loggedInUser.photo} alt="" />
        //         <span>{loggedInUser.name}</span>
        //     </div>
        //     <ul className="list-unstyled">
        //         <li>
        //             <Link to="/" className="text-white link">
        //                 <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        //             </Link>
        //         </li>

        //         {/* Consumer */}
        //         {loggedInUser.role === 'consumer' && <div>

        //             <li>
        //                 <Link to="/review" className="text-white link">
        //                     <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
        //                 </Link>
        //             </li>
        //         </div>}

        //         {/* Admin */}
        //         {loggedInUser.role === 'admin' && <div>
        //             <li>
        //                 <Link to="/AdminOrderList" className="text-white link">
        //                     <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/addService" className="text-white link">
        //                     <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/makeAdmin" className="text-white link">
        //                     <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/consumersList" className="text-white link">
        //                     <FontAwesomeIcon icon={faTasks} /> <span>Consumers List</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/serviceProvidersList" className="text-white link">
        //                     <FontAwesomeIcon icon={faTasks} /> <span>Service Providers List</span>
        //                 </Link>
        //             </li>
        //         </div>}

        //         {/* Service Provider */}
        //         {loggedInUser.role === 'service-provider' && <div>
        //             <li>
        //                 <Link to="/addService" className="text-white link">
        //                     <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/manageServices" className="text-white link">
        //                     <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
        //                 </Link>
        //             </li>
        //         </div>}

        //     </ul>
        //     <div>
        //         <Link to="/" className="text-white link"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        //     </div>
        // </div>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <Link to="/consumersList" className="sidebarListItem link">
                            <PermIdentity className="sidebarIcon" />
                            Service Consumers
                        </Link>
                        <Link to="/serviceList" className="sidebarListItem link ">
                            <Storefront className="sidebarIcon" />
                            Services
                        </Link>
                        
                        <Link to="/orderList" className="sidebarListItem link">
                            <MailOutline className="sidebarIcon" />
                            Order List
                        </Link>
                        <Link to="/consumersList" className="sidebarListItem link">
                            <DynamicFeed className="sidebarIcon" />
                            Service Consumer List
                        </Link>
                        <Link to='/serviceProvidersList' className="sidebarListItem link">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Service Provider List
                        </Link>
                        <Link to="/makeAdmin" className="sidebarListItem link">
                            <WorkOutline className="sidebarIcon" />
                            Make Admin
                        </Link>
                        <Link to="/addService" className="sidebarListItem link">
                            <WorkOutline className="sidebarIcon" />
                            Add Services
                        </Link>
                        <Link to="/manageServices" className="sidebarListItem link">
                            <WorkOutline className="sidebarIcon" />
                            Manage Services
                        </Link>
                        <Link to="/review" className="sidebarListItem link">
                            <WorkOutline className="sidebarIcon" />
                            Review
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="sidebarListItem link active ">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </Link>
                        <li className="sidebarListItem link">
                            <Timeline className="sidebarIcon" />
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