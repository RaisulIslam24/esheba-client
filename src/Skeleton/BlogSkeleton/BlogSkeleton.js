import React from 'react';
import Skeleton from '../Skeleton';
import './BlogSkeleton.css';

const BlogSkeleton = () => {
    return (
        <div className='blog-skeleton-wrapper'>
            <Skeleton type='thumbnail' />
            <Skeleton type='text-lg' />
            <Skeleton type='text-md' />
            <Skeleton type='text-sm' />
            <div className='blog-shimmer-wrapper'>
                <div className='blog-shimmer'></div>
            </div>
        </div>
    );
};

export default BlogSkeleton;