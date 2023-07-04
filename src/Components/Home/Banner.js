import React from 'react';
import atc from '../../img/ATC-logo.PNG'
import tabiba from '../../img/Tabiba-logo.PNG'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 m-10'>
            <div className='flex items-center justify-around  bg-sky-400 rounded-xl p-3 py-5'>
                <img className='w-20 h-20 rounded-xl mr-3' src={atc} alt="" />
                <div> 
                <h3 className='text-xl font-bold text-white'>AMAYRA TRADING COMPANY</h3>
                <p>Indenture, Shipbroker, Importer <br />Exporter, Carrier & Suppliers</p>
                </div>
            </div>
            <div className='flex items-center justify-around bg-red-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-3' src={tabiba} alt="" />
                <div>
                <h3 className='text-xl font-bold text-white'>TABIBA IMPLEX LTD.</h3>
                <p>Importer, Exporter & Suppliers <br />All Kinds of Goods</p>
                </div>
            </div>
            <div className='flex items-center justify-around bg-lime-400 rounded-xl p-3'>
                <img className='w-20 rounded-xl mr-3' src={tabiba} alt="" />
                <div>
                <h3 className='text-xl font-bold text-white'>TABIBA MARINE SERVICES</h3>
                <p>Importer, Exporter & Suppliers <br />All Kinds of Goods</p>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;