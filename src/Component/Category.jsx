import React, { useState, useEffect } from "react";

import { HiMiniSquare2Stack } from "react-icons/hi2";
import { FaPenAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";





const Category = () => {
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
            <div>
              <div className='flex flex-col items-center gap-9 mt-20'>
         <div className='flex flex-col text-center'>
           <h2 className='text-3xl'>Featurs</h2>
           <p>Most calendars are designed teams. <br /> slate is designed for freelancer</p>
         </div>
         <div className='flex flex-col gap-10 text-center'>
         <div className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <HiMiniSquare2Stack className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         <div  className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <FaPenAlt className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         <div  className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <FaPen className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         </div>
         
       </div>
            </div>
      ):(
         <div className='flex flex-col items-center gap-9 mt-20'>
         <div className='flex flex-col text-center'>
           <h2 className='text-3xl'>Featurs</h2>
           <p>Most calendars are designed teams. <br /> slate is designed for freelancer</p>
         </div>
         <div className='flex gap-10 text-center'>
         <div className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <HiMiniSquare2Stack className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         <div  className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <FaPenAlt className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         <div  className='flex flex-col gap-6 items-center'>
           <h4 className='text-xl font-bold'>Most Type Featurs <br /> Variable fonts</h4>
           <FaPen className='text-blue-500'/>
           <p>Slate helps you see how <br /> many more days you need <br /> to work to reach your <br /> financial goal.</p>
         </div>
         </div>
         
       </div>
      )}
    </div>
   
  )
}

export default Category;
