

import React from 'react';
import Navbar from '../Navbar.tsx';
import DentalHeader from "../common/DentalHeader.tsx";

const UserDashboard = () => {

    return (
        <div className="flex h-screen">
            
            {/* <Navbar/> */}

            <DentalHeader/>
            <div className="flex-1 p-4">
                <h1 className="font-bold pl-4">User is not vissible Dashboard</h1>
            </div>
            
        </div>
    );

}

export default UserDashboard
