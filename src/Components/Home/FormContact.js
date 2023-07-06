import React from 'react';
import { Link } from 'react-router-dom';

const FormContact = () => {
    const handleSubmit = () =>{

    }
    return (
        <div>
            <div>
        {/* <div className="p-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          <img className="ms-20 w-[350px]" src={nsuLogo} alt="" />
        </div> */}
        <div className="bg-yellow-200 md:w-2/3 lg:w-1/2 mx-auto py-16 my-16">
          <h1 className="text-black text-center font-bold mb-5 text-3xl">
            Send Your Interest
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name='name'
              placeholder="Type your name"
              className="m-5 block mx-auto input w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Type your email"
              className="m-5 block mx-auto input w-full max-w-xs"
            />
            <textarea
              type="password"
              name='password'
              placeholder="Type your interest"
              className="m-5 block mx-auto textarea w-full max-w-xs"
            />
              
              
            <input
              type="submit"
              value="Submit"
              placeholder="Type your password"
              className="m-5 btn-accent cursor-pointer text-white text-bold text-xl block mx-auto input w-full max-w-xs"
            />
          </form></div>
        
      </div>
        </div>
    );
};

export default FormContact;