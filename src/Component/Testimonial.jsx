import React from 'react'
import ellipse from '../Asset/images/ellipse.png';
const Testimonial = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <h2 className='text-4xl'>Testimonals</h2>
      <h2 className='text-5xl font-bold text-blue-600'>IBM</h2>
      <p className='flex text-center'>Most calendars are designed for teams; slate is designed for feelancers <br /> who want a simple way to plan their schedule</p>
     <div className='flex gap-5'>
     <img src={ellipse} />
      <div>
      <p>Organize across</p>
      <p>Ui designer</p>
      </div>
     </div>
      <button className='bg-sky-500 text-white font-bold p-4 mx-6 rounded-2xl'>More Testimonials</button>
    </div>
  )
}

export default Testimonial
