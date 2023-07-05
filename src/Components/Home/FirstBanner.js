import React from 'react';
import './FirstBanner.css'

const FirstBanner = () => {
    return (
      <div className="banner h-screen">
        <div className="m-auto text-center">
          <div class=" text-white m-auto py-10 md:pt-36">
            <div><h1 className='text-2xl md:text-4xl font-bold'>COMPETITIVE RATES</h1>
            <h1 className='text-4xl md:text-6xl font-bold my-8 text-white'>SAFETY & RELIABLE ON-TIME</h1></div>
          </div>
            <hr className='hr-dashed w-2/4 m-auto'/>
          <p className='text-xl md:text-3xl text-white my-10 font-bold'>We denounce with righteous indignation & dislike beguiled</p>
          
          <div className="text-center m-auto">
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
          </div>
        </div>
      </div>
    );
};

export default FirstBanner;