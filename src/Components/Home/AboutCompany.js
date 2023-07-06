import React from 'react';
import reliableService from '../../img/reliableService.jpg'
import aboutCompany from '../../img/aboutCompany.PNG'
import statementMission from '../../img/statementMission.PNG'
import StatementVision from '../../img/StatementVision.PNG'
import statementValue from '../../img/statementValue.PNG'
import { Link } from 'react-router-dom';

const AboutCompany = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={reliableService} className=" rounded-lg shadow-2xl" />
    <div className='p-10'>
    <p className="text-orange-500 text-lg font-bold">About Us</p>
        <p className="text-3xl md:text-5xl font-bold my-8">
        Provide a Reliable <br /> Services Since 2011
        </p>
        <div className='my-5'>
                <p className='my-4 text-xl'>We are <b>Amayra Trading Company</b>, "Shipbroker" that has "S&P dept.</p>
                <p className='my-4 text-xl'>Our service promise to make your dreams come true. Please Feel to browse around our site, and your valuable feedback would be highly appreciated. We also have export, import & carrier business.</p>
            </div>
            <Link to='/about'>
            <button className=" btn btn-accent font-bold">
              <div className="flex  justify-around items-center text-white  w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>{" "}
                <p>MORE DETAILS</p>
              </div>
            </button>
            </Link>
            <div>
                <div className='grid md:grid-cols-2 gap-5 mt-12'>
                    <img className='my-5 cursor-pointer hover:w-80' src={aboutCompany} alt="" />
                    <img className='my-5 cursor-pointer hover:w-80' src={statementMission} alt="" />
                    <img className='my-5 cursor-pointer hover:w-80' src={statementValue} alt="" />
                    <img className='my-5 cursor-pointer hover:w-80' src={StatementVision} alt="" />
                </div>
            </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutCompany;