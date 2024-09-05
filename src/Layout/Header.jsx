import React, { useState, useEffect } from "react";
import logo from "../Asset/images/Logo.png";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rectangle from "../Asset/images/Rectangle.png"
import Hero from "../Component/Hero";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "../Component/MobileNav";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileNav, setMobileNav] = useState(false); 
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const affiche = () => {
      setMobileNav(!mobileNav)
    }
    const supprime = () => {
      setMobileNav(!mobileNav)
    }

    return (
        <div>
            {
              windowWidth < 768 ? (
                <div className="flex  justify-between text-white items-center py-3 px-9 pb-60" style={{backgroundImage: `url(${Rectangle})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <img src={logo} />
                    <div className='flex gap-10 items-center'>       
                      {mobileNav ?  <IoCloseSharp  className="text-3xl md:text-4xl lg:text-5xl" onClick={supprime}/>:
                      <RxHamburgerMenu className="text-3xl md:text-4xl lg:text-5xl" onClick={affiche}/> }
                   </div>
                </div>
              ) : ( 
                <div className="bg-cover bg-center bg-no-repeat h flex flex-col pb-40"    style={{ backgroundImage: `url(${Rectangle})`  }} >
                <div className="flex justify-between items-center py-3 px-9">
                   <nav>
                      <ul className="flex gap-5 text-white">
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
                   <img src={logo} />
                   <div className="flex gap-5 text-white">
                   <FaFacebookSquare />
                    <FaTwitter />
                    <FaLinkedin /> 
                   </div>
               </div>
               <Hero/>
              </div>
            )}
            {mobileNav ? <MobileNav/> : null}
        </div>
    
       
    )
}
export default Header;