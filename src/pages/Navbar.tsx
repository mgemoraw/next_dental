import React from 'react';
import { Link } from "react-router-dom";
import {isAuthenticated, logOut} from "../auth/user.tsx";


const Navbar = () => {

  const handleLogout = () => {
    logOut();
  }
  
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-xl font-bold">
          <Link to="/">Dental Clinic</Link>
        </div>
        <div className="flex space-x-4">  
          <Link to="/" className="text-gray-800 hover:text-white">Home</Link>  
          <Link to="/about" className="text-gray-800 hover:text-white">About</Link>  
          <Link to="/services" className="text-gray-800 hover:text-white">Services</Link>  
          <Link to="/contact" className="text-gray-800 hover:text-white">Contact</Link> 
          
          {!isAuthenticated() ? 
          (<Link to="/login" className="text-gray-800 hover:text-white">Login</Link> )
          : (<Link to="/" onClick={handleLogout} className="text-gray-800 hover:text-white">Logout</Link> )
          }
           
        </div> 
      </div>
    </nav>
  )
};

export default Navbar;