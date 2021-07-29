import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h1>Welcome to Dashboard Page</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;