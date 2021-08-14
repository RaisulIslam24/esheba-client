import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboardRight">
                <h1>Welcome to Dashboard Page</h1>
            </div>
        </div>
    );
};

export default Dashboard;