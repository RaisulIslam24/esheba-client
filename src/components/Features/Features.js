import React, { useState } from 'react';
import { useEffect } from 'react';
import featuresData from '../../data/data.json'
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';



const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        setFeatures(featuresData);
        console.log(featuresData);
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mt-5" >
                <h1 style={{ textAlign: 'center' }}>Services</h1>
                {
                    features.map(feature => <FeaturesDetails feature={feature}></FeaturesDetails>)
                }
            </div>
        </div>
    );
};

export default Features;