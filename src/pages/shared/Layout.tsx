import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../common/SideNavigation.tsx';



const Layout = () => {

    return (
        <div>
            <div><SideNav/></div>
            <div>Header</div>
            <div>{<Outlet/>}</div>            

        </div>
    );
}

export default Layout

