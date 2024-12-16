import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../common/SideNavigation.tsx';
import Navbar from '../Navbar.tsx';



const Layout = () => {

    return (
        <div>
            <Navbar/>
            <div><SideNav/></div>
            <div>Header</div>
            <div>{<Outlet/>}</div>            

        </div>
    );
}

export default Layout

