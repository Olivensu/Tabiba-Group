import React from 'react';

const SignIn = () => {
        const handleSubmit = () =>{
    
        }
        return (
            <div>
                <div className='top-banner h-72 bg-[#0A1F3C]'>
                <h1 className='text-5xl font-bold text-white text-center pt-24'>Sign In</h1>
                <p className='text-accent pt-16 pl-16 text-xl font-bold'>HOME // Sign In</p>
            </div>
                <div>
            {/* <div className="p-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
              <img className="ms-20 w-[350px]" src={nsuLogo} alt="" />
            </div> */}
            <div className="bg-yellow-200 md:w-2/3 lg:w-1/2 mx-auto py-16 my-16">
              <h1 className="text-black text-center font-bold mb-5 text-3xl">
                Login Our Website
              </h1>
    
              <form onSubmit={handleSubmit}>
                
                <input
                  type="email"
                  name='email'
                  placeholder="Type your email"
                  className="m-5 block mx-auto input w-full max-w-xs"
                />
                
                <input
                  type="password"
                  name='password'
                  placeholder="Type your password"
                  className="m-5 block mx-auto input w-full max-w-xs"
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

export default SignIn