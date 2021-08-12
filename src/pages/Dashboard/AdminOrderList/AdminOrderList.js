import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminOrderList = () => {
    const [orders, setOrders] = useState([]);

    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Service Owner</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default AdminOrderList;