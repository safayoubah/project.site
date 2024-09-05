import React, { useState, useEffect } from "react";
import Copy from "../Asset/images/copy.png";


const Phototyping = () => {
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
          
             <div className='flex flex-col gap-20 justify-center items-center mt-40'>
       <div>
         <img src={Copy} />
       </div>
       <div className='flex flex-col gap-5'>
         <h5 className='font-bold'>At your fingertips</h5>
         <h3 className='text-xl'>Lightning fast <br /> prototyping</h3>
         <div>
             <h5 className='font-bold'>Subscribe to our Newsletter</h5>
             <p className='text-sm'>Available exclusivery on figmaland</p>
         </div>
         <div className='flex gap-5'>
             <button className='bg-slate-300 p-1 rounded-xl'>Your Email</button>
             <button className='bg-sky-600 p-2 rounded-xl'>Subcribe</button>
         </div>
       </div>
     </div>
          
        ):
      (
       <div className='flex gap-20 justify-center items-center mt-40'>
       <div>
         <img src={Copy} />
       </div>
       <div className='flex flex-col gap-5'>
         <h5 className='font-bold'>At your fingertips</h5>
         <h3 className='text-xl'>Lightning fast <br /> prototyping</h3>
         <div>
             <h5 className='font-bold'>Subscribe to our Newsletter</h5>
             <p className='text-sm'>Available exclusivery on figmaland</p>
         </div>
         <div className='flex gap-5'>
             <button className='bg-slate-300 p-1 rounded-xl'>Your Email</button>
             <button className='bg-sky-600 p-2 rounded-xl'>Subcribe</button>
         </div>
       </div>
     </div>
      )}
     </div>

    
  )
}

export default Phototyping;
