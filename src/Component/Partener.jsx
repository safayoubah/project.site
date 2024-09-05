import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Google from "../Asset/images/google.png"
import Amazon from "../Asset/images/amazon.png"
import Microsoft from "../Asset/images/microsoft.png"
import Uber from "../Asset/images/uber.png"

const Partener = () => {
  return (


    <div className='flex justify-center items-center p-52 '>
    <Carousel >
       <div className='flex justify-center items-center'>
           <img src={Google} className='max-w-xs'/> 
        </div>
        <div className='flex justify-center items-center'>
            <img src={Amazon} className='max-w-xs'/>
        </div>
        <div  className='flex justify-center items-center'>
            <img src={Microsoft}  className='max-w-xs'/>
        </div>
        <div  className='flex justify-center items-center'>
            <img src={Uber}  className='max-w-xs'/>
        </div>
        <div className='flex justify-center items-center'>
           <img src={Google} className='max-w-xs'/> 
        </div>
        <div className='flex justify-center items-center'>
            <img src={Amazon} className='max-w-xs'/>
        </div>
        <div  className='flex justify-center items-center'>
            <img src={Microsoft}  className='max-w-xs'/>
        </div>
        <div  className='flex justify-center items-center'>
            <img src={Uber}  className='max-w-xs'/>
        </div>
       
    </Carousel>
    </div>
  )
}

export default Partener;
