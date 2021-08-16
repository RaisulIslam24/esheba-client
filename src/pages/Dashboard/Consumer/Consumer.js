import React, { useState, useEffect } from 'react';
import './Consumer.css';
import ConsumerDetails from '../ConsumerDetails/ConsumerDetails';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';


const Consumer = () => {
    const [consumer, setConsumer] = useState([]);
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/loadAll/consumer')
            .then(res => res.json())
            .then(data => setConsumer(data))
    }, [])
    return (

        <>
            <TopBarDash />
            <section className="consumers">
                <Sidebar />
                <div className="consumersRight">
                    {
                        consumer.map(consumers => <ConsumerDetails consumers={consumers} key={consumers._id}></ConsumerDetails>)
                    }
                </div>
            </section>
        </>
    );
};

export default Consumer;