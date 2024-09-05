import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
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
          <div className='flex flex-col gap-28 justify-center items-center bg-slate-800 text-white mt-20 p-20'>
    <div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-5'>
        <h4 className='font-bold'>Pages</h4>
        <p className='text-sm'>Home</p>
        <p className='text-sm'>Product</p>
        <p className='text-sm'>Pricing</p>
        <p className='text-sm'>About</p>
        <p className='text-sm'>Contact</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h4 className='font-bold'>Tomothy</h4>
        <p className='text-sm'>Eleanor Edwards</p>
        <p className='text-sm'>Ted Robertson</p>
        <p className='text-sm'>Annette Russel</p>
        <p className='text-sm'>Jennie Mckinney</p>
        <p className='text-sm'>Gloria Richards</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h4 className='font-bold'>Jene Black</h4>
        <p className='text-sm'>Phillip Jones</p>
        <p className='text-sm'>Product</p>
        <p className='text-sm'>Colleen Russell</p>
        <p className='text-sm'>Marvic Hawkins</p>
        <p className='text-sm'>Bruce Simmmons</p>
      </div>
    </div>
    <div className='flex flex-col gap-7'>
       <div className='flex gap-5'>
       <FaLocationDot className=' text-2xl'/>
       <p className='text-sm'>7480 Mockhingbird Hill underfined</p>
       </div>
       <div className='flex gap-5'>
       <IoIosPhonePortrait className=' text-2xl'/>
       <p className='text-sm'>(239) 555-0108</p>
       </div>
       <div className='flex gap-5'>
       <FaFacebookSquare className='text-2xl'/>
          <FaTwitter className='text-2xl'/>
          <FaLinkedin  className='text-2xl'/> 
        </div> 
    </div>
    </div>
        ):
      (
        <div className='flex gap-28 justify-center bg-slate-800 text-white mt-20 p-20'>
        <div className='flex gap-16'>
        <div className='flex flex-col gap-5'>
            <h4 className='font-bold'>Pages</h4>
            <p className='text-sm'>Home</p>
            <p className='text-sm'>Product</p>
            <p className='text-sm'>Pricing</p>
            <p className='text-sm'>About</p>
            <p className='text-sm'>Contact</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h4 className='font-bold'>Tomothy</h4>
            <p className='text-sm'>Eleanor Edwards</p>
            <p className='text-sm'>Ted Robertson</p>
            <p className='text-sm'>Annette Russel</p>
            <p className='text-sm'>Jennie Mckinney</p>
            <p className='text-sm'>Gloria Richards</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h4 className='font-bold'>Jene Black</h4>
            <p className='text-sm'>Phillip Jones</p>
            <p className='text-sm'>Product</p>
            <p className='text-sm'>Colleen Russell</p>
            <p className='text-sm'>Marvic Hawkins</p>
            <p className='text-sm'>Bruce Simmmons</p>
          </div>
        </div>
        <div className='flex flex-col gap-7'>
           <div className='flex gap-5'>
           <FaLocationDot className=' text-2xl'/>
           <p className='text-sm'>7480 Mockhingbird Hill underfined</p>
           </div>
           <div className='flex gap-5'>
           <IoIosPhonePortrait className=' text-2xl'/>
           <p className='text-sm'>(239) 555-0108</p>
           </div>
           <div className='flex gap-5'>
           <FaFacebookSquare className='text-2xl'/>
              <FaTwitter className='text-2xl'/>
              <FaLinkedin  className='text-2xl'/> 
            </div> 
        </div>
        </div>
      )}
    </div>
  )
}

export default Footer
