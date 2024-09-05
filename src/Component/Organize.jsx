import React, { useState, useEffect } from "react";
import Mackbook from "../Asset/images/macbook.png"

const Organize = () => {
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
      windowWidth < 768 ?(
        <div className='flex flex-col justify-center gap-20 mt-32 items-center'>
        <div className='flex flex-col gap-8'>
          <h3 className='text-xl font-bold'>Fastest way to <br /> Organize </h3>
         <p>Most calendars are designed for teams. <br /> Slate is designed for freelancer</p>
         <button className='bg-sky-600 p-2 rounded-xl'>Try For Free</button>
        </div>
        <div>
          <img src={Mackbook} />
        </div>
      </div>
      ): 
      (
       <div className='flex justify-center gap-20 mt-32'>
      <div className='flex flex-col gap-8'>
        <h3 className='text-xl font-bold'>Fastest way to <br /> Organize </h3>
       <p>Most calendars are designed for teams. <br /> Slate is designed for freelancer</p>
       <button className='bg-sky-600 p-2 rounded-xl'>Try For Free</button>
      </div>
      <div>
        <img src={Mackbook} />
      </div>
    </div>
      )}
        
    </div>
    
  )
}

export default Organize
