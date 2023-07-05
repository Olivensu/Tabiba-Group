import React from 'react';
import plane from '../../img/plane.PNG'
import road from '../../img/road.PNG'
import ship from '../../img/ship.PNG'

const Freight = () => {
    return (
      <div className="text-center my-28 m-10">
        <p className="text-orange-500 text-lg font-bold">OUR SERVICES</p>
        <p className="text-3xl md:text-4xl font-bold my-8">
          Moving Your Products Across All Borders
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center mt-24'>
          <div className="card w-80 bg-[#293E9C] shadow-xl">
            <div className="card-body text-white">
              <h2 className="card-title font-bold text-2xl">Air Freight</h2>
              <p className='text-start'>Air freight parcel delivery is the transfer and shipment of goods via an air carrier, which may be charter or commercial.</p>
              <button>
              <div className="flex  justify-around items-center text-accent mt-6  w-36">
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
            <figure>
              <img src={plane} alt="Shoes" />
            </figure>
          </div>
          <div className="card w-80 bg-[#293E9C] shadow-xl">
            <div className="card-body text-white">
              <h2 className="card-title font-bold text-2xl">Sea Freight</h2>
              <p className='text-start'>Sea freight is a method of transporting large quantities of products via cargo ships. </p>
              <button>
              <div className="flex  justify-around items-center text-accent mt-6  w-36">
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
            <figure>
              <img src={ship} alt="Shoes" />
            </figure>
          </div>
          <div className="card w-80 bg-[#293E9C] shadow-xl">
            <div className="card-body text-white">
              <h2 className="card-title font-bold text-2xl">Road Freight</h2>
              <p className='text-start'>We combine transport execution with transport management services to meet all your needs on the road.</p>
              <button>
              <div className="flex  justify-around items-center text-accent mt-6  w-36">
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
            <figure>
              <img src={road} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
    );
};

export default Freight;