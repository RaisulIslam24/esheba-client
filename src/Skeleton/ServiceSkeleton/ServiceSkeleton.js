import React from 'react';
import Skeleton from '../Skeleton';
import './ServiceSkeleton.css';

const ServiceSkeleton = () => {
    return (
        <div className='service-skeleton-wrapper'>
            <Skeleton type='thumbnail' />
            <Skeleton type='text-lg' />
            <div className='service-shimmer-wrapper'>
                <div className='service-shimmer'></div>
            </div>
        </div>
    );
};

export default ServiceSkeleton;