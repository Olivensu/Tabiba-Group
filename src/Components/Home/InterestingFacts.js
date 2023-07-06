import React from 'react';
import delivered from '../../img/delivery.png'
import Employee from '../../img/employee.png'
import Satisfied  from '../../img/satisfied.png'
import Branches   from '../../img/branches.png'
import Tons  from '../../img/tons.png'

const InterestingFacts = () => {
    return (
      <div className="text-center my-28 py-24 md:m-10 bg-blue-600">
        <p className="text-orange-500 text-lg font-bold">INTERESTING FACTS</p>
        <p className="text-3xl md:text-5xl text-white font-bold my-8">
          The Numbers Speak for <br />
          themselves
        </p>

        <div className='grid grid-cols-1 mt-20 md:grid-cols-2 gap-5'>
            <div className='flex bg-white shadow-lg justify-between  p-5 text-start'>
                <div>
                    <p className='text-4xl font-bold text-orange-600'>6500</p>
                    <p className='text-2xl font-bold'>Parcel Delivered</p>
                </div>
                <img src={delivered} alt="" />
            </div>
            <div className='flex bg-white shadow-lg justify-between  p-5 text-start'>
                <div>
                    <p className='text-4xl font-bold text-orange-600'>254</p>
                    <p className='text-2xl font-bold'>Expert Employee</p>
                </div>
                <img src={Employee} alt="" />
            </div>
            <div className='flex bg-white shadow-lg justify-between  p-5 text-start'>
                <div>
                    <p className='text-4xl font-bold text-orange-600'>249</p>
                    <p className='text-2xl font-bold'>Satisfied Clients</p>
                </div>
                <img src={Satisfied} alt="" />
            </div>
            <div className='flex bg-white shadow-lg justify-between  p-5 text-start'>
                <div>
                    <p className='text-4xl font-bold text-orange-600'>14</p>
                    <p className='text-2xl font-bold'>Branches Across</p>
                </div>
                <img src={delivered} alt="" />
            </div>
            
        </div>
      </div>
    );
};

export default InterestingFacts;