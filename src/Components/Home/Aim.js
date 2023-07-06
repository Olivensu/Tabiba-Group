import React from 'react';
import transparentPrice from '../../img/transparentPrice.jpg'
import onTimeDelivery from '../../img/onTimeDelivery.jpg'
import RealTimeTracking from '../../img/RealTimeTracking.jpg'
import OnlineSupport from '../../img/OnlineSupport.jpg'

const Aim = () => {
    return (
        <div className="text-center my-32 m-10">
        <p className="text-orange-500 text-lg font-bold">WHY CHOOSE US</p>
        <p className="text-3xl md:text-4xl font-bold my-8">
          Moving Your Products Across All Borders
        </p>
        <div className='my-24'>
            <div className='grid grid-cols-1 my-12 md:grid-cols-2 justify-items-center gap-12'>
                <div className='shadow-lg flex md:w-[500px] w-[350px]'>
                <img className='object-fill' src={transparentPrice} alt="" />
                <div className='text-start p-3 px-5'>
                    <p className='text-xl font-bold'>Trasparent Pricing</p>
                    <hr className='my-4 w-2/4 outline-dashed outline-orange-600 outline-2'/>
                    <p>The price I've listed is really, truly a price I could accept for this property.</p>
                </div>
                </div>
                <div className='shadow-lg flex md:w-[500px] w-[350px]'>
                <img className='object-fill' src={onTimeDelivery} alt="" />
                <div className='text-start p-3 px-5'>
                    <p className='text-xl font-bold'>On - Time Delivery</p>
                    <hr className='my-4 w-2/4 outline-dashed outline-orange-600 outline-2'/>
                    <p>On-time deliveries comprise a key performance indicator (KPI) that ecommerce businesses use to track their delivery performance.</p>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12'>
            <div className='shadow-lg flex md:w-[500px] w-[350px]'>
                <img className='object-fill' src={RealTimeTracking} alt="" />
                <div className='text-start p-3 px-5'>
                    <p className='text-xl font-bold'>Real Time Tracking</p>
                    <hr className='my-4 w-2/4 outline-dashed outline-orange-600 outline-2'/>
                    <p>Real-time location tracking is a process that allows you to track the real-time location of an object or person.</p>
                </div>
                </div>
            <div className='shadow-lg flex md:w-[500px] w-[350px]'>
                <img className='object-fill' src={OnlineSupport} alt="" />
                <div className='text-start p-3 px-5'>
                    <p className='text-xl font-bold'>24/7 Online Support</p>
                    <hr className='my-4 w-2/4 outline-dashed outline-orange-600 outline-2'/>
                    <p>24/7 customer support means customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.</p>
                </div>
                </div>
            </div>
        </div>
        
      </div>
    );
};

export default Aim;