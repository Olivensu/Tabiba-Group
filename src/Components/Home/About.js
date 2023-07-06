import React from 'react';
import Banner from './Banner';
import AboutCompany from './AboutCompany';
import Banner2 from './Banner2';

const About = () => {
    return (
        <div>
            <div className='top-banner h-72 bg-[#0A1F3C]'>
                <h1 className='text-5xl font-bold text-white text-center pt-24'>About Company</h1>
                <p className='text-accent pt-16 pl-16 text-xl font-bold'>HOME // ABOUT COMPANY</p>
            </div>
            <Banner></Banner>
            <AboutCompany></AboutCompany>
            <Banner2></Banner2>
        </div>
    );
};

export default About;