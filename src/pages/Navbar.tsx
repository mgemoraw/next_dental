import React, { useState} from 'react';
import { Link } from "react-router-dom";
import {isAuthenticated, logOut} from "../auth/user.tsx";
import { IconLogout, IconMoon, IconMoonFilled, IconSun, IconUser, IconMenu2 } from '@tabler/icons-react';
import { Settings } from 'tabler-icons-react';
import {useNavContext} from "./shared/NavContext.jsx"


const Navbar = ({onToggleSidebar}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setThemeDark] = useState(false);
  
  const handleLogout = () => {
    logOut();
  }

  const toggleDark = () => {
    setThemeDark(!isDark);
  }
  
  return (
    <nav className="bg-gray-50 p-4 border flex">
      <Link  onClick={onToggleSidebar} className="mr-3 ">{isAuthenticated() ? <IconMenu2/>: <></>}</Link>
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex text-gray-800 text-xl font-bold">
          
          <Link to="/user/home">Tana Dental Clinic</Link>
        </div>
        <div className="flex space-x-4">  
          <Link to="/" className="text-gray-800 p-3 hover:bg-gray-200 hover:text-blue-800">Home</Link>  
          <Link to="/about" className="text-gray-800 p-3 hover:bg-gray-200 hover:text-blue-800">About</Link>  
          <Link to="/services" className="text-gray-800 p-3 hover:bg-gray-200 hover:text-blue-800">Services</Link>  
          <Link to="/contact" className="text-gray-800 p-3 hover:bg-gray-200 hover:text-blue-800">Contact</Link> 
          <Link to="/contact" className="text-gray-800 p-3 hover:bg-gray-200 hover:text-blue-800">
            {isDark ? <IconMoon/> : <IconSun/>}
            </Link> 
          
          {!isAuthenticated() ? 
          (<Link to="/login" className="text-gray-800 hover:text-white">Login</Link> )
          : (
              <div className="flex justify-between"> 
                <Link to="/user/profile" onClick={undefined} className="p-3 hover:bg-gray-200 "><IconUser/></Link>
                <Link to="/" onClick={handleLogout} className="p-3 hover:bg-gray-200 hover:text-blue-800 "><IconLogout/></Link> 
              </div>
            )
          }
           
        </div> 
      </div>
    </nav>
  )
};

export default Navbar;