import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../auth/user.tsx';
import {Button} from "@mantine/core";

function SideNav() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLogout = () => {
        logOut();
      }

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    
    <div className={`bg-blue-500 text-gray-800 h-screen ${isExpanded ? 'w-64' : 'w-16 sm:block'} sm:hidden md:block lg:block xl:block `}>
        {/* bg-blue-500 text-gray-800 h-screen w-64 fixed top-0 left-0 flex flex-col */}
        
      <div className="flex items-center p-4">
        <Link to="/user" className="text-xl font-bold">Home</Link>
        <Button className="p-4" onClick={toggleSidebar}>
        {/* Toggle button icon or text */}
        Menu
      </Button>
      </div>
      
      <ul>
        <li className="p-4 hover:bg-blue-700">
          <a href="/user">Dashboard</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
          <a href="/employee">Employees</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
          <a href="/patient">Patients</a>
        </li>
        
        <li className="p-4 hover:bg-blue-700">
          <a href="/products">Products</a>
        </li>
        <li className="p-4 hover:bg-grblueay-700">
          <a href="/services">Services</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
          <a href="#">Settings</a>
        </li>
        <Link to="/" onClick={handleLogout} className="p-4 hover:bg-blue-800 font-bold">Logout</Link>

      </ul>
    </div>
  );
}

export default SideNav;


