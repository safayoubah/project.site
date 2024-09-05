import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Asset/images/Logo.png";

const MobileNav = () => {
  return (
    <div className='h-screen fixed bg-black top-0 w-80 '>
      <img src={logo} className='mx-10'/>
      <nav >
          <ul className="flex flex-col gap-5 text-white mx-5 p-3">
         <li className="border-b-2 border-transparent hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-500">
        <Link to="/">Home</Link>
         </li>
      <li className="border-b-2 border-transparent hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-500">
         <Link to="/procduct">Product</Link>
     </li>
    <li className="border-b-2 border-transparent hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-500">
    <Link to="/pricing">Pricing</Link>
    </li>
      <li className="border-b-2 border-transparent hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-500">
      <Link to="/about">About</Link>
      </li>
     <li className="border-b-2 border-transparent hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-500">
     <Link to="/contact">Contact</Link>
    </li>
    </ul> 
    </nav>
    </div>
  )
}

export default MobileNav
