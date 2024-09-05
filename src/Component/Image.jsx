import React, { useState, useEffect } from "react";
import screen from "../Asset/images/screen.png";

const Image = () => {
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
      windowWidth <768 ?(
          
            <div className='flex items-center justify-center mt-20'>
           <img src={screen}/>
           </div>
      
      ): 
      (
        <div className='flex items-center justify-center mt-40'>
      <img src={screen}/>
    </div>
      )}
      
    </div>
  )
}

export default Image
