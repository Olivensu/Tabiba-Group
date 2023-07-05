import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import FirstBanner from './FirstBanner';
import Freight from './Freight';
import AboutCompany from './AboutCompany';
import Aim from './Aim';
import InterestingFacts from './InterestingFacts';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <FirstBanner></FirstBanner>
            <Banner></Banner>
            <Freight></Freight>
            <AboutCompany></AboutCompany>
            <Aim></Aim>
            <InterestingFacts></InterestingFacts>
            <Review></Review>
            <Banner2></Banner2>
            
        </div>
    );
};

export default Home;