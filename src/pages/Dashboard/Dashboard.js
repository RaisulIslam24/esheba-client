import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import TopBarDash from './TopBarDash/TopBarDash';

const Dashboard = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <>
            <TopBarDash />
            <section className="dashboard">
                <Sidebar />
                <div className="dashboardRight">
                    <h1>Welcome to  Dashboard</h1>
                </div>
            </section>
        </>
    );
};

export default Dashboard;