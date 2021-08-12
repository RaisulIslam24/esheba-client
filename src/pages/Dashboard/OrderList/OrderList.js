import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <table>
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

export default OrderList;