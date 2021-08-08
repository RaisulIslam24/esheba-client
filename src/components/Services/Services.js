import React, { useState, useEffect } from 'react';
import featuresData from '../../data/data.json'
import { useParams } from 'react-router-dom';
import './Services.css';
import DetailsSkeleton from '../../Skeleton/DetailsSkeleton/DetailsSkeleton';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Footer/Footer';


const Services = () => {
    const [services, setServices] = useState([]);
    const [skeletonTimer, setSkeletonTimer] = useState(true)
    const { id } = useParams();

    const service = services.find(pd => pd.id == id);

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 4000);
    }, []);

    useEffect(() => {
        setServices(featuresData);
    }, [])

    return (
        <>
            <NavBar />
            {skeletonTimer ?
                <DetailsSkeleton />
                :
                <div className="services-container">
                    <div className="services-bg py-5">
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center justify-content-center">
                                <div className="col-xl-5 col-xxl-6  d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={service?.image} alt="..." /></div>
                                <div className="col-lg-8 col-xl-7 col-xxl-6">
                                    <div className="my-5 text-center text-xl-start">
                                        <h1 className="display-5 fw-bolder text-white mb-2"> {service?.name}</h1>
                                        <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                            <h1 className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</h1>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    );
};

export default Services;