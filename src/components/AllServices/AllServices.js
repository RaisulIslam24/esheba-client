import React, { useState, useEffect } from 'react';
import featuresData from '../../data/data.json'
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton/ServiceSkeleton';
import AllServicesDetails from '../AllServicesDetails/AllServicesDetails';
import './AllServices.css';


const AllServices = () => {
    const [allServices, setAllServices] = useState([]); const [skeletonTimer, setSkeletonTimer] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 4000);
    }, []);

    useEffect(() => {
        setAllServices(featuresData);
    }, [])
    return (
        ((skeletonTimer) ?

            <div className="row m-5">
                {allServices.map((loading) => (
                    <div className="col-md-4 mt-3">
                        <ServiceSkeleton />
                    </div>
                ))}
            </div>
            :
            <div className="row mx-3 all-services"  >
                <h1 style={{ textAlign: 'center' }}>All Services</h1>
                {
                    allServices.map(allService => <AllServicesDetails allService={allService}></AllServicesDetails>)
                }
            </div>
        ));
};

export default AllServices;