import React, { useState, useEffect } from 'react';
import featuresData from '../../data/data.json'
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';
import DetailsSkeleton from '../../Skeleton/DetailsSkeleton/DetailsSkeleton';
import NavBar from '../../components/Home/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';



const Services = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [skeletonTimer, setSkeletonTimer] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 3000);
    }, []);

    const getService = () => {
        axios.get('http://localhost:5000/serviceDetails/' + id)
            .then((response) => {
                if (response.status === 200) {
                    setServiceInfo(response.data);
                    console.log(response.data);

                }
            })
    }
    useEffect(() => {
        getService();
    }, [id])

    return (
        <>
            <NavBar />
            {((skeletonTimer && serviceInfo) || (skeletonTimer === serviceInfo)) ?
                <DetailsSkeleton />
                :
                <div className="service-details-container">
                    <div className="service-content-div">
                        <img
                            src={serviceInfo?.image} alt=""
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                        <div
                            className="service-details-div"
                        >
                            <h2
                                data-aos="fade-down"
                                data-aos-duration="1000">
                                {serviceInfo?.serviceName}
                            </h2>
                            <h6
                                className="text-justify"
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                {serviceInfo?.serviceDetails}
                            </h6>
                            <h2
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                Price: ${serviceInfo?.price}
                            </h2>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    );
};

export default Services;