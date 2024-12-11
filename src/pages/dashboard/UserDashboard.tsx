
import React from 'react';

import DentalHeader from "../common/DentalHeader.tsx";
import PatientTab from '../common/PatientTabs.jsx';
import { TabVertical, SideNav} from '../common/SideNavigation.tsx';
import SideBar from "../common/SideBar.jsx";
import {Button, Autocomplete} from "@mantine/core";


const UserDashboard = () => {

    const handleSearch = () => {
        console.log("Searching...");
    };



    return (
        <div className="flex h-screen">
            
            <div>
                <SideNav/>
            </div>
            <div className="flex-1 p-4">
                <h1 className="font-bold pl-4 text-2xl">Tana Dental Clinic Management System</h1>

                <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">

                <Button >
                    Add Patient
                </Button>

                </div>
                
                <PatientTab/>
                <Autocomplete
                    className="mt-3 pt-3 rounded-full..."
                    placeholder='Search Patient...'
                    onChange={handleSearch}
                />
            </div>
            
        </div>
    );

}

export default UserDashboard
