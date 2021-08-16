import React, { useState } from 'react';
import { useEffect } from 'react';
import ServiceProviderDetails from '../../../components/ServiceProviderDetails/ServiceProviderDetails';

const ServiceProvider = () => { 
    const [serviceProvider,setServiceProvider] =  useState([]);
    useEffect(()=>{
fetch('https://e-sheba.herokuapp.com/loadAll/service-provider?fbclid=IwAR2mQm2dCoqtuu6n1E9lwPwD7SEFmQc1c1OL7IQ19VmGKyGVnQNDPz6Oi54')
.then(res =>res.json())
.then(data =>setServiceProvider(data))
    },[])
    return (

        <div className="row">
        {
            serviceProvider.map(serviceProviders=><ServiceProviderDetails serviceProviders={serviceProviders} key={serviceProviders._id}></ServiceProviderDetails> )
        }
  </div>

    );
};

export default ServiceProvider;