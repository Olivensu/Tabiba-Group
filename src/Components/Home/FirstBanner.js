import React from 'react';
import './FirstBanner.css'

const FirstBanner = () => {
    return (
      <div className="banner h-screen ">
        <div className="m-auto text-center h-screen bg-gray-700 bg-opacity-60">
          <div class=" text-white m-auto py-10 pt-28 md:pt-42 lg:pt-56">
            <div><h1 className='text-2xl md:text-4xl font-bold'>COMPETITIVE RATES</h1>
            <h1 className='text-4xl md:text-6xl font-bold my-8 text-white'>SAFETY & RELIABLE ON-TIME</h1></div>
          </div>
            <hr className='hr-dashed w-2/4 m-auto'/>
          <p className='text-xl md:text-3xl text-white my-10 font-bold'>We denounce with righteous indignation & dislike beguiled</p>
          
          <div className="text-center m-auto">
            <button className=" btn btn-accent font-bold">
              <div className="flex  justify-around items-center hover:transition hover:duration-300 hover:ease-in-out hover:text-gray-800 hover:font-bold text-white  w-36">
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
          </div>
        </div>
      </div>
    );
};

export default FirstBanner;