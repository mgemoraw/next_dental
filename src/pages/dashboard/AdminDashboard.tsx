

import React, { useState } from 'react';
import Navbar from "../common/Navbar.tsx"
import SideBar from '../common/SideBar.jsx';

const AdminDashboard = () => {
    const [isOpen, setNavOpen] = useState(false);

    const toggleSidebar = () => {
        setNavOpen(!isOpen);
    }


    return (
        <>
            <Navbar onToggleSidebar={toggleSidebar}/>
            <h1>Admin Dashboard</h1>
            <SideBar isExpanded={isOpen}/>
        </>
    );

}

export default AdminDashboard