import React from 'react';
import Skeleton from '../Skeleton';
import './ServiceSkeleton.css';

const ServiceSkeleton = () => {
    return (
        <div className='skeleton-wrapper'>
            <Skeleton type='thumbnail' />
            <Skeleton type='text-lg' />
            <div className='shimmer-wrapper'>
                <div className='shimmer'></div>
            </div>
        </div>
    );
};

export default ServiceSkeleton;