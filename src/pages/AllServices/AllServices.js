import React, { useState, useEffect } from 'react';
import './AllServices.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Home/NavBar/NavBar';
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton/ServiceSkeleton';
import SingleService from '../../components/SingleService/SingleService';
import axios from 'axios';


const AllServices = () => {
    const [allServices, setAllServices] = useState([]); const [skeletonTimer, setSkeletonTimer] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 3000);
    }, []);

    const getAllServices = () => {
        axios.get('https://e-sheba.herokuapp.com/services')
            .then((response) => {
                if (response.status === 200) {
                    setAllServices(response.data);
                }
            })
    }

    useEffect(() => {
        getAllServices();
    }, [])
    return (
        <>
            <NavBar />
            {((skeletonTimer && allServices) || (skeletonTimer === allServices)) ?

                <div className="row m-5">
                    {allServices.map((loading) => (
                        <div className="col-md-4 mt-3">
                            <ServiceSkeleton />
                        </div>
                    ))}
                </div>
                :
                <div className="row mx-3 mb-5 mt-3">
                    {
                        allServices.map(feature => <SingleService feature={feature}></SingleService>)
                    }
                </div>
            }
            <Footer />
        </>
    );
};

export default AllServices;