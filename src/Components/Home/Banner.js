import React from 'react';
import atc from '../../img/ATC-logo.PNG'
import tabiba from '../../img/Tabiba-logo.PNG'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10 my-24 m-10'>
            <div className='flex items-center w-[420px]  bg-sky-400 rounded-xl p-3 py-5'>
                <img className='w-20 h-20 rounded-xl mr-5' src={atc} alt="" />
                <div> 
                <h3 className='text-xl font-bold text-white mb-3'>AMAYRA TRADING COMPANY</h3>
                <p>Indenture, Shipbroker, Importer <br />Exporter, Carrier & Suppliers</p>
                </div>
            </div>
            <div className='flex items-center w-[420px]  bg-red-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-5' src={tabiba} alt="" />
                <div>
                <h3 className='text-xl font-bold text-white mb-3'>TABIBA IMPLEX LTD.</h3>
                <p>Importer, Exporter & Suppliers <br />All Kinds of Goods</p>
                </div>
            </div>
            <div className='flex items-center w-[420px]  bg-lime-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-5' src={tabiba} alt="" />
                <div>
                <h3 className='text-xl font-bold text-white mb-3'>TABIBA MARINE SERVICES</h3>
                <p>Importer, Exporter & Suppliers <br />All Kinds of Goods</p>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;