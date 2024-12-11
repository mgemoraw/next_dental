
import React from 'react';

import DentalHeader from "../common/DentalHeader.tsx";
import PatientTab from '../common/PatientTabs.jsx';



const UserDashboard = () => {

    return (
        <div className="flex h-screen">
            
            {/* <Navbar/> */}

            <DentalHeader/>
            <div className="flex-1 p-4">
                <h1 className="font-bold pl-4 text-4xl">Tana Dental Clinic Management System</h1>
                <PatientTab/>
            </div>
            
        </div>
    );

}

export default UserDashboard
