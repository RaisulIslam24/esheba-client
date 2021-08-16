import React, { useContext } from 'react';
import './TopBarDash.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { userContext } from '../../../App';

const TopBarDash = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={loggedInUser.photo} alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default TopBarDash;