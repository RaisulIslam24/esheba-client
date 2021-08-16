import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [orders, setOrders] = useState([]);

    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td><img style={{width: '80px'}} src="" alt=""/></td>
                                    <td></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default ManageServices;