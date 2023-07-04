import React from 'react';
import atc from '../../img/ATC-logo.PNG'

const Banner2 = () => {
    return (
        <div className='m-12'>
            
            <div className='flex align-bottom'>
                <img className='w-12 rounded-xl' src={atc} alt="" />
                <div className='w-full'>
                    <h2 className='text-end text-3xl text-orange-700 font-bold mb-3'>Amayra Trading Company</h2>
                    <hr className='divide-neutral-950 divide-x-2'/>
                </div>
            </div>

            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>Welcome</h1>
                <p className='my-4 text-xl'>We are <b>Amayra Trading Company</b>, "Shipbroker" that has "S&P dept.</p>
                <p className='my-4 text-xl'>Our service promise to make your dreams come true. Please Feel to browse around our site, and your valuable feedback would be highly appreciated. We also have export, import & carrier business.</p>
                <p className='my-4 text-xl'><b>Amayra Trading Company</b> was born 2011 at Dhaka, Bangladesh.</p>
            </div>

            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>Vision</h1>
                <p className='my-4 text-xl'>Peace, happiness and prosperity for community-A vision to sea beyond future, the sprit to what no one has thought before and the belief that sincerity, honesty and hard work supported with diving blessings and backed by good intensions can make miracles, to bring peace, happiness and prosperity for community</p>
            </div>

            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>The Present State Of Company</h1>
                <p className='my-4 text-xl'>We concentrate on the Business with overseas/domestic shipowners mainly since the establishment.</p>
                <p className='my-4 text-xl'>S & P Dept. Is Strong In Handling Small Size Vessels Such As About 100mt Deadweight To Handy Size Ones, Especially Cargo, Tankers, Ferries, Cruisers, And So On.</p>
                <p className='my-4 text-xl'>We Promise "Quick And Accurate" Service.</p>
            </div>
            
            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>Sale & Purchase dept.S</h1>
                <p className='my-4 text-xl'>Mall size(about 100mt) cargo vessels, tankers,containers,ferries, fishboats, and about 10,000mt og tankers and bulkers, and  about 40,000mt of handy size vessels, We are ready for response to any kinds of your needs anytime, anywhere.</p>
                <p className='my-4 text-xl'>Please also feel to call us about not only selling/purchasing vessels but your wondering of import/export business.</p>
            </div>
        </div>
    );
};

export default Banner2;