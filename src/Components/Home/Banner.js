import React from 'react';
import atc from '../../img/ATC-logo.PNG'
import tabiba from '../../img/Tabiba-logo.PNG'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10 my-24 m-10'>
            <div className='flex items-center w-[350px] md:w-[380px] lg:w-[410px]  bg-sky-400 rounded-xl p-3 py-5'>
                <img className='w-20 h-20 rounded-xl mr-5' src={atc} alt="" />
                <div> 
                <Link to='/about'><h3 className='text-xl cursor-pointer font-bold text-white mb-3'>AMAYRA TRADING COMPANY</h3></Link>
                <p>Ship owner, Importer, Indenture, shipbroker, Sell and Purchase (SNP).</p>
                </div>
            </div>
            <div className='flex items-center  w-[350px] md:w-[380px] lg:w-[410px]  bg-red-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-5' src={tabiba} alt="" />
                <div>
                <Link  to='/about'><h3 className='text-xl font-bold text-white mb-3'>TABIBA IMPLEX LTD.</h3></Link>
                <p>Ship owner, Cargo Handling, Chartering, carrying contractor.</p>
                </div>
            </div>
            <div className='flex items-center  w-[350px] md:w-[380px] lg:w-[410px]  bg-lime-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-5' src={tabiba} alt="" />
                <div>
                <Link to='/comingSoon'><h3 className='text-xl font-bold text-white mb-3'>TABIBA MARINE SERVICES</h3></Link>
                <p>Paints, Ship Store, Ship Equipment’s spare parts, Suppliers.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;