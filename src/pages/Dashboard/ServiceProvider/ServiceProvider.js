import React, { useState , useEffect} from 'react';
import './ServiceProvider.css';
import ServiceProviderDetails from '../../../components/ServiceProviderDetails/ServiceProviderDetails';
import Sidebar from '../Sidebar/Sidebar';

const ServiceProvider = () => {
    const [serviceProvider, setServiceProvider] = useState([]);
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/loadAll/service-provider')
            .then(res => res.json())
            .then(data => setServiceProvider(data))
    }, [])
    return (
        <div className="serviceProvider">
            <Sidebar />
            <div className="serviceProviderRight">
                {
                    serviceProvider.map(serviceProviders => <ServiceProviderDetails serviceProviders={serviceProviders} key={serviceProviders._id}></ServiceProviderDetails>)
                }
            </div>
        </div>

    );
};

export default ServiceProvider;