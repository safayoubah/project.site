import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import Map from '../Asset/images/map.png';
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";



const Contact = () => {
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
        windowWidth <768 ? (
        
          <div className='flex flex-col items-center mt-10 gap-10'>
          <h2 className='text-3xl'>Contact Us</h2>
          <p className='text-center'>Most calendars are designed for teams; slate is designed for feelancers <br /> who want a simple way to plan their schedule</p>
         <div className='flex flex-col gap-14'>
         <div className='flex flex-col gap-14 shadow-2xl p-5 h-full justify-center mx-28'>
            <h3 className='font-bold'>Contact Us</h3>
            <input type="text" placeholder='Your Name' className='bg-slate-300 p-2 rounded-3xl'/>
            <input type="text" placeholder='Your Email' className='bg-slate-300 p-2 rounded-3xl'/>
            <textarea type="text" placeholder='Your Message' className='bg-slate-300 p-2 rounded-3xl'/>
            <button className='bg-sky-500 p-1 rounded-3xl text-white'>Send</button>
          </div>
          <div className='flex flex-col gap-10 items-center'>
          <div className='flex flex-col gap-x-10 '>
           <div className='flex flex-col items-center gap-4 text-center'>
           <FaLocationDot className='text-sky-600 text-2xl'/>
           <p>6386 Sprig St underfined Anchorage <br /> Georgia 12473 United states</p>
           </div>
         <div className='flex flex-col items-center gap-4'>
         <IoIosPhonePortrait className='text-sky-500 text-2xl'/>
         <div>(843)555-0130</div>
         </div>
          <div className='flex flex-col items-center gap-4'>
          <FaRegEnvelope className='text-sky-500 text-2xl'/>
          <div>willie. jenning@example.com</div>
          </div>
          </div>
          <img src={Map} className='max-w-xl mx-'/>
          <div className='flex gap-5 text-sky-500'>
          <FaFacebookSquare className='text-2xl'/>
          <FaTwitter className='text-2xl'/>
          <FaLinkedin  className='text-2xl'/> 
          </div>
          </div>
         </div>
        </div>
        
        ):
      (
        <div className='flex flex-col items-center mt-10 gap-10'>
        <h2 className='text-3xl'>Contact Us</h2>
        <p className='text-center'>Most calendars are designed for teams; slate is designed for feelancers <br /> who want a simple way to plan their schedule</p>
       <div className='flex gap-14'>
       <div className='flex flex-col gap-14 shadow-2xl p-5 h-full'>
          <h3 className='font-bold'>Contact Us</h3>
          <input type="text" placeholder='Your Name' className='bg-slate-300 p-2 rounded-3xl'/>
          <input type="text" placeholder='Your Email' className='bg-slate-300 p-2 rounded-3xl'/>
          <textarea type="text" placeholder='Your Message' className='bg-slate-300 p-2 rounded-3xl'/>
          <button className='bg-sky-500 p-1 rounded-3xl text-white'>Send</button>
        </div>
        <div className='flex flex-col gap-10 items-center'>
        <div className='flex gap-x-10 '>
         <div className='flex flex-col items-center gap-4 text-center'>
         <FaLocationDot className='text-sky-600 text-2xl'/>
         <p>6386 Sprig St underfined Anchorage <br /> Georgia 12473 United states</p>
         </div>
       <div className='flex flex-col items-center gap-4'>
       <IoIosPhonePortrait className='text-sky-500 text-2xl'/>
       <div>(843)555-0130</div>
       </div>
        <div className='flex flex-col items-center gap-4'>
        <FaRegEnvelope className='text-sky-500 text-2xl'/>
        <div>willie. jenning@example.com</div>
        </div>
        </div>
        <img src={Map} className='max-w-xl '/>
        <div className='flex gap-5 text-sky-500'>
        <FaFacebookSquare className='text-2xl'/>
        <FaTwitter className='text-2xl'/>
        <FaLinkedin  className='text-2xl'/> 
        </div>
        </div>
       </div>
      </div>
      )}
      
    </div>
  )
}

export default Contact
