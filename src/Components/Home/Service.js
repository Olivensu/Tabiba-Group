import React from 'react';
import Freight from './Freight';

const Service = () => {
    return (
        <div>
            <div className='top-banner h-72 bg-[#0A1F3C]'>
                <h1 className='text-5xl font-bold text-white text-center pt-24'>Our Service</h1>
                <p className='text-accent pt-16 pl-16 text-xl font-bold'>HOME // Our Service</p>
            </div>
            <Freight></Freight>
        </div>
    );
};

export default Service;