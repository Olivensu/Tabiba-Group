import React from 'react';
import atc from '../../img/ATC-logo.PNG'

const Banner2 = () => {
    return (
        <div className='m-12 mt-32 '>
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
                <p className='my-4 text-xl'>WE CONCENTRATE ON THE BUSINESS WITH OVERSEAS/DOMESTIC SHIPOWNERS MAINLY SINCE THE ESTABLISHMENT.</p>
                <p className='my-4 text-xl'>S&P DEPT. IS STRONG IN HANDLING SMALL SIZE VESSELS SUCH AS ABOUT 100MT DEADWEIGHT TO HANDY SIZE ONES, ESPECIALLY CARGO VESSELS, TANKERS, FERRIES, CRUISERS, AND SO ON.</p>
                <p className='my-4 text-xl'>CHARTERING DEPT. MAINLY FIXES EXPORT/IMPORT TRADES IN SOUTH EAST ASIA, SUCH AS AMONG KOREA, CHINA, VIETNAM, THAILAND, MALAYSIA, SINGAPORE, INDONESIA, TAIWAN, PHILIPPINES, AND SO ON.</p>
                <p className='my-4 text-xl'>We Promise "Quick And Accurate" Service.</p>
            </div>
            
            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>Sale & Purchase dept.S</h1>
                <p className='my-4 text-xl'>SMALL SIZE (ABOUT 100MT) CARGO VESSELS, TANKERS, CONTAINERS, FERRIES, FISHBOATS, AND ABOUT 10,000MT OF TANKERS AND BULKERS, AND ABOUT 40,000MT OF HANDY SIZE VESSELS. WE ARE READY FOR RESPONSE TO ANY KINDS OF YOUR NEEDS ANYTIME, ANYWHERE.</p>
                <p className='my-4 text-xl'>PLEASE ALSO FEEL FREE TO CALL US ABOUT NOT ONLY SALING/PURCHASING VESSELS BUT YOUR WONDERINGS OF IMPORT/EXPORT BUSINESSES.</p>
            </div>
            <div className='my-12'>
                <h1 className='text-4xl mb-10 font-bold text-orange-700'>Chartering Department</h1>
                <p className='my-4 text-xl'>ABOUT 3,000MT TO 15,000MT DEADWEIGHT STEEL PRODUCTS CARRIER, LOG CARRIERS, AND BULKERS.</p>
                <p className='my-4 text-xl'>WE HAVE SUITABLE CARGOES FOR YOUR WONDERFUL VESSELS WHO ARE FREE AT PORTS IN ASIA.</p>
                <p className='my-4 text-xl'>WE ALSO HAVE SUITABLE VESSELS FOR YOUR ANY KINDS OF CARGOES FROM WHEREVER AND WHENEVER. WE NEVER LET YOUR VESSELS OR CARGOES SPEND USELESS TIME.</p>
            </div>
        </div>
    );
};

export default Banner2;