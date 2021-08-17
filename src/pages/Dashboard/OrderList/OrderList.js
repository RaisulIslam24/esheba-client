import React, { useState } from 'react';
import './OrderList.css';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    return (
        <>
            <TopBarDash />
            <section className="orderList">
                <Sidebar />
                <div className="orderListRight">
                    <h1>Order List will be there</h1>
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
        </>
    );
};

export default OrderList;