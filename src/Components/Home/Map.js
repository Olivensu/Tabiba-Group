import React from 'react';

const Map = () => {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.53790744805!2d90.43052019999999!3d23.7638523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77bd3a2377b%3A0x90e73e3ab7ffa114!2sEasySheba%20Platform%20Ltd.!5e0!3m2!1sen!2sbd!4v1688554459281!5m2!1sen!2sbd"
          className="w-full"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='bg-[rgb(41,62,156)] p-3 md:px-10 py-24 grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='flex '>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  bg-accent text-white p-3 mr-8 md:mr-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <p className='text-3xl font-bold text-white'>
              Subscribe Our Newsletter <br />& Get Updates.
            </p>
          </div>
          <div>
            <form class="flex items-center">
              <label for="voice-search" class="sr-only">
                Search
              </label>
              <div class="relative w-3/4">
                <div class="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 text-white h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z"
                      clipRule="evenodd"
                    />
                    <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  pl-10 p-6 pl-20  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email Address..."
                  required
                />
              </div>
              <button className="btn p-1 rounded btn-accent font-bold py-6 md:py-8 ml-2">
                <div className="flex  justify-around items-center mt-[-10px] hover:transition hover:duration-300 hover:ease-in-out hover:text-gray-800 hover:font-bold text-white  w-32">
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
                  <p>SUBSCRIBE</p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Map;