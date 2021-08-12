import React, { useState } from 'react';
import { useEffect } from 'react';
import ConsumerDetails from '../../../ConsumerDetails/ConsumerDetails';


const Consumer = () => {
    const [consumer, setConsumer] = useState([]);
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/loadAll/consumer?fbclid=IwAR0IKWY0vQxOvkBh2duoPD0opZzpj0y5Zf2xD9dZnFOO5GOMvQRO2dhIY5c')
            .then(res => res.json())
            .then(data => setConsumer(data))
    }, [])
    return (

        <div className="row">
            {
                consumer.map(consumers => <ConsumerDetails consumers={consumers} key={consumers._id}></ConsumerDetails>)
            }
        </div>

    );
};

export default Consumer;