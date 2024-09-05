import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
     <div>
      {
       windowWidth < 768 ? (
        <div className='flex flex-col gap-5 items-center bg-slate-700 mt-20'>
        <div className='text-center mt-10 flex flex-col gap-5 text-white'>
          <h2 className='text-3xl'>Pricing</h2>
          <p>Most calendars are designed for teams; slate is designed for feelancers <br /> who want a simple way to plan their schedule</p>
        </div>
        <div className='flex flex-col gap-7 mt-10 mb-20'>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        </div>
      </div>
       ):
      (
        <div className='flex flex-col gap-5 items-center bg-slate-700 mt-20'>
        <div className='text-center mt-10 flex flex-col gap-5 text-white'>
          <h2 className='text-3xl'>Pricing</h2>
          <p>Most calendars are designed for teams; slate is designed for feelancers <br /> who want a simple way to plan their schedule</p>
        </div>
        <div className='flex gap-7 mt-10 mb-20'>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        <div className='flex flex-col gap-5 items-center bg-white p-16 rounded-xl transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg'>
          <h3 className='text-center'>FREE</h3>
          <p className='text-center'>Organize across all <br /> app by hand</p>
          <div className='flex items-center gap-4'>
          <p className='text-5xl font-bold'>0</p>
          <div>
          <p>$</p>
          <p>Per Month</p>
          </div>
          </div>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <button className='text-white bg-sky-500 p-3 mx-6 rounded-3xl hover:bg-blue-600'>Order Now</button>
        </div>
        </div>
      </div>
      )}
     </div>

    
  )
}

export default Pricing
