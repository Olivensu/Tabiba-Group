import React from 'react';
import mg1 from '../../img/Galllary/1586525046061.jpg'
import mg2 from '../../img/Galllary/bashundhara-multi-food-products-limited-bmf-logo-vector.png'
import mg3 from '../../img/Galllary/download.jpg'
import mg4 from '../../img/Galllary/partex.PNG'
import mg5 from '../../img/Galllary/Super Petrochemical Limited.png'
import mg6 from '../../img/Galllary/United.png'
import mg7 from '../../img/Galllary/T.K_Group_Logo.jpg'

const MyClient = () => {
    return (
        <div className='text-center my-16'>
            <p className="text-orange-500 text-3xl font-bold">Our Clients</p>
        {/* <p className="text-3xl md:text-5xl font-bold my-8">
        Provide a Reliable <br /> Services Since 2011
        </p> */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg1} alt="" />
            <p className='text-xl font-bold'>Aqua Refinery Limited </p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg2} alt="" />
            <p className='text-xl font-bold'>Bashundhara Multi food products ltd </p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg3} alt="" />
            <p className='text-xl font-bold'> Petromax Refinery Ltd. </p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg4} alt="" />
            <p className='text-xl font-bold'>Partex Petro Ltd</p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg5} alt="" />
            <p className='text-xl font-bold'>Super Petrochemical Limited </p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg6} alt="" />
            <p className='text-xl font-bold'>United Group  </p>
        </div>
        <div className='w-80 m-auto bg-sky-300 p-5 rounded-2xl shadow-2xl'>
            <img className='w-20 m-auto my-3' src={mg7} alt="" />
            <p className='text-xl font-bold'>TK group of industries  </p>
        </div>
        </div>
        </div>
    );
};

export default MyClient;