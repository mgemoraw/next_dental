import React, { useState} from 'react';
import { Link } from "react-router-dom";
import {isAuthenticated, logOut} from "../auth/user.tsx";
import { IconLogout, IconMoon, IconMoonFilled, IconSun, IconUser, IconMenu2 } from '@tabler/icons-react';
import { Settings } from 'tabler-icons-react';
import {useNavContext} from "./shared/NavContext.jsx"


const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setThemeDark] = useState(false);
  const {toggleNav} = useNavContext();
  
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  }

  const handleLogout = () => {
    logOut();
  }

  const toggleDark = () => {
    setThemeDark(!isDark);
  }
  
  return (
    <nav className="bg-gray-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-gray-800 text-xl font-bold">
          <Link  onClick={undefined} className="mr-3 ml-3"><IconMenu2/></Link>
          <Link to="/user/home">Tana Dental Clinic</Link>
        </div>
        <div className="flex space-x-4">  
          <Link to="/" className="text-gray-800 hover:text-white">Home</Link>  
          <Link to="/about" className="text-gray-800 hover:text-white">About</Link>  
          <Link to="/services" className="text-gray-800 hover:text-white">Services</Link>  
          <Link to="/contact" className="text-gray-800 hover:text-white">Contact</Link> 
          <Link to="/contact" className="text-gray-800 hover:text-white">
            {isDark ? <IconMoon/> : <IconSun/>}
            </Link> 
          
          {!isAuthenticated() ? 
          (<Link to="/login" className="text-gray-800 hover:text-white">Login</Link> )
          : (
              <div className="flex justify-between"> 
                <Link to="/user/profile" onClick={undefined} ><IconUser/></Link>
                <Link to="/" onClick={handleLogout} className="text-gray-800 hover:text-white"><IconLogout/></Link> 
              </div>
            )
          }
           
        </div> 
      </div>
    </nav>
  )
};

export default Navbar;