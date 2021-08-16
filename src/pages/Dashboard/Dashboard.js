import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';




const Dashboard = () => {
    return (
        <section>
            <div className="dashboard">
                <div className="dashboardLeft">
                    <Sidebar />
                </div>
                <div className="dashboardRight">
                    <h1>Welcome to Dashboard Page</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;