import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../common/SideNavigation.tsx';
import Navbar from '../Navbar.tsx';



const Layout = () => {
    const [isOpen, setNavOpen] = useState(false);

    const toggleSidebar = () => {
        setNavOpen(!isOpen);
    }

    return (
        <div>
            <Navbar onToggleSidebar={toggleSidebar}/>
            <div><SideNav isExpanded={isOpen}/></div>
            <div>Header</div>
            <div>{<Outlet/>}</div>            

        </div>
    );
}

export default Layout

