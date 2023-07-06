import React from 'react';
import male from '../../img/Galllary/male.png'

const OurTeam = () => {
    return (
        <div>
            <div className='top-banner h-72 bg-[#0A1F3C]'>
                <h1 className='text-5xl font-bold text-white text-center pt-24'>Our Team</h1>
                <p className='text-accent pt-16 pl-16 text-xl font-bold'>HOME // Our Team</p>
            </div>
            <div className='grid md:grid-cols-2'>
            <div className='card shadow-xl md:w-2/3 w-10/12 bg-cyan-100 my-10 m-auto'>
                <img className='w-36 m-auto' src={male} alt="" />
                <div className='text-center py-10'>
                    <p className='text-xl font-bold  my-1'>Md Reza-E-Rabby</p>
                    <p className='text-2xl text-red-700 font-bold my-1'>Amayra Trading Company</p>
                    <p className='text-xl font-bold my-1'>Managing Director</p>
                    <p className='text-xl my-1'>01721-315455</p>

                </div>
            </div>
            <div className='card shadow-xl md:w-2/3 w-10/12 bg-cyan-100 my-10 m-auto'>
                <img className='w-36 m-auto' src={male} alt="" />
                <div className='text-center py-10'>
                    <p className='text-xl font-bold  my-1'>Md Reza-E-Rabby</p>
                    <p className='text-2xl text-red-700 font-bold my-1'>Amayra Trading Company</p>
                    <p className='text-xl font-bold my-1'>Managing Director</p>
                    <p className='text-xl my-1'>01721-315455</p>

                </div>
            </div>
            </div>
        </div>
    );
};

export default OurTeam;