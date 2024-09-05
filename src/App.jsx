 import React from "react";
 import Header from "./Layout/Header";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage"
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import Footer from "./Layout/Footer";


 
function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/product" element={<ProductPage/>} />
       <Route path="/pricing" element={<PricingPage/>} />
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/contact" element={<ContactPage/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
