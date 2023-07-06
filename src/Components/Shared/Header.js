import React from 'react';
import tabibaIcon from '../../img/Tabiba-logo.PNG'

const Header = () => {
    return (
      <div className='relative'>
        <div className="navbar bg-orange-600 md:px-16 fixed top-0 left-0 right-0 z-50">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <a className='text-lg font-bold '>Home</a>
              </li>
              <li>
                <a className='text-lg font-bold '>About</a>
              </li>
              <li>
                <a className='text-lg font-bold '>Services</a>
              </li>
              <li>
                <a className='text-lg font-bold '>Our Team</a>
              </li>
              <li>
                <a className='text-lg font-bold '>Contact</a>
              </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-white ml-[-15px] normal-case text-xl md:text-2xl  font-bold"> <img className='w-8 md:w-12 md:mr-4 rounded' src={tabibaIcon} alt="" /> Tabiba Group</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className='text-lg font-bold text-white'>Home</a>
              </li>
              <li>
                <a className='text-lg font-bold text-white'>About</a>
              </li>
              <li>
                <a className='text-lg font-bold text-white'>Services</a>
              </li>
              <li>
                <a className='text-lg font-bold text-white'>Our Team</a>
              </li>
              <li>
                <a className='text-lg font-bold text-white'>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-sm hover:btn-secondary  btn-active hover:transition hover:duration-500 hover:ease-in-out hover:text-red-600 hover:font-bold  text-lg">Sign In</a>
          </div>
        </div>
      </div>
    );
};

export default Header;