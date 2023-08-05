import React from 'react';
import FormContact from './FormContact';
import Map from './Map';

const Contact = () => {
    return (
      <div>
        <div className='top-banner h-72 bg-[#0A1F3C]'>
                <h1 className='text-5xl font-bold text-white text-center pt-24'>Contact Us</h1>
                <p className='text-accent pt-16 pl-16 text-xl font-bold'>HOME // Contact Us</p>
            </div>
        <div className='m-10  grid gap-10 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
        
        <div className="flex items-center bg-lime-300 p-3 w-72 py-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent mr-5 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-xl font-bold">Phone</p>
            <p className="text-lg mt-2">(+880)1721-315455</p>
          </div>
        </div>
        <div className="flex items-center bg-orange-300 p-3 w-72 py-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent mr-5 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>

          <div>
            <p className="text-xl font-bold">Email</p>
            <p className="text-lg mt-2">prince.reza777@gmail.com </p>
            <p className="text-lg mt-1">tabibaimpex@gmail.com</p>
            <p className="text-lg mt-1">amayratrading@yahoo.com</p>
          </div>
        </div>
        <div className="flex items-center bg-sky-300 p-3 w-72 py-3 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-accent mr-5 w-8 h-8">
  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>


          <div>
            <p className="text-xl font-bold">Location</p>
            <p className="text-lg mt-2">House #10, 4th floor, Block #C, Bonosree, Rampura, Dhaka</p>
          </div>
        </div>
        <div className="flex items-center bg-purple-300 p-3 w-72 py-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-accent mr-5 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>

          <div>
            <p className="text-xl font-bold">Saturday - Thursday</p>
            <p className="text-lg mt-2">09.00 am to 5.00pm (Friday: Closed)</p>
          </div>
        </div>
      </div>
      <FormContact></FormContact>
      <Map></Map>
      </div>
    );
};

export default Contact;