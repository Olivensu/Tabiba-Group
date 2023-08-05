import React from 'react';
import img1 from '../../img/Galllary/IMG-20230805-WA0001.jpg'
import img2 from '../../img/Galllary//IMG-20230805-WA0002.jpg'
import img3 from '../../img/Galllary/IMG-20230805-WA0003.jpg'
import img4 from '../../img/Galllary/IMG-20230805-WA0004.jpg'
import img5 from '../../img/Galllary/IMG-20230805-WA0005.jpg'
import img6 from '../../img/Galllary/IMG-20230805-WA0006.jpg'
import img7 from '../../img/Galllary/IMG-20230805-WA0007.jpg'
import img8 from '../../img/Galllary/IMG-20230805-WA0008.jpg'
import img9 from '../../img/Galllary/IMG-20230805-WA0009.jpg'
import img10 from '../../img/Galllary/IMG-20230805-WA0010.jpg'
import img11 from '../../img/Galllary/IMG-20230805-WA0011.jpg'
import img12 from '../../img/Galllary/IMG-20230805-WA0035.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-amber-50 text-black">
          <div>
            <span className="footer-title text-2xl">Contact Us</span>
            <hr className="mb-8 w-2/4 outline-dashed outline-orange-600 outline-2" />
            <div className='flex items-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-accent mr-5 w-6 h-6"
              ><path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
              <p className="text-xl font-bold">Phone</p>
              <p className='text-lg mt-2'>(+880)1721-315455</p>
              </div>
            </div>
            <div className='flex items-center my-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-accent mr-5 w-6 h-6">
  <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>

              <div>
              <p className="text-xl font-bold">Email</p>
              <p className="text-lg mt-2">prince.reza777@gmail.com </p>
            <p className="text-lg mt-1">tabibaimpex@gmail.com</p>
            <p className="text-lg mt-1">amayratrading@yahoo.com</p>
              </div>
            </div>
            <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-accent mr-5 w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
</svg>

              <div>
              <p className="text-xl font-bold">Saturday - Thursday</p>
              <p className='text-lg mt-2'>09.00 am to 5.00pm (Friday: Closed)</p>
              </div>
            </div>
            <div className="grid grid-flow-col gap-10 text-gray-800 mt-8 ">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
          <span className="footer-title text-2xl">useful Links</span>
            <hr className="mb-8 w-2/4 outline-dashed outline-orange-600 outline-2" />
            <div className=''>
              <div className='mr-8'>
              <Link to='/' className="link block hover:text-accent no-underline text- text-lg mb-3">+ Home</Link>
              <Link to='/contact' className="link block hover:text-accent no-underline text- text-lg my-3">+ Contact</Link>
              <Link to='/about' className="link block hover:text-accent no-underline text- text-lg my-3">+ About</Link>
              <Link to='/service' className="link block hover:text-accent no-underline text- text-lg my-3">+ Service</Link>
              <Link to='/team' className="link block hover:text-accent no-underline text- text-lg my-3">+ Our Team</Link>
              </div>
              
            </div>
          </div>
          <div>
          <span className="footer-title text-2xl">Our Gallery</span>
            <hr className="mb-8 w-2/4 outline-dashed outline-orange-600 outline-2" />
            <div className='grid grid-cols-2  lg:grid-cols-3 gap-3'>
              <img className='lg:w-32 ' src={img7} alt="" />
              <img className='lg:w-32 ' src={img1} alt="" />
              <img className='lg:w-32 ' src={img2} alt="" />
              <img className='lg:w-32 ' src={img3} alt="" />
              <img className='lg:w-32 ' src={img5} alt="" />
              <img className='lg:w-32 ' src={img6} alt="" />
              <img className='lg:w-32 ' src={img4} alt="" />
              <img className='lg:w-32 ' src={img8} alt="" />
              <img className='lg:w-32 ' src={img9} alt="" />
              <img className='lg:w-32 ' src={img10} alt="" />
              <img className='lg:w-32 ' src={img11} alt="" />
              <img className='lg:w-32 ' src={img12} alt="" />
            </div>
          </div>
        </footer>
        <footer className="footer items-center p-4 bg-accent text-white  px-10">
  <div className="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2023 - All right reserved by Tabiba Group</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>Terms & Conditions</a> 
    <a>Privacy Policy</a>
    <a>Sitemap</a>
  </div>
</footer>
      </div>
    );
};

export default Footer;