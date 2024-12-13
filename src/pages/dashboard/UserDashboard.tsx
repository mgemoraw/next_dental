
import React from 'react';
import {Link, Routes, Route, Outlet} from 'react-router-dom';

import DentalHeader from "../common/DentalHeader.tsx";
import PatientTab from '../common/PatientTabs.jsx';
import { TabVertical, SideNav} from '../common/SideNavigation.tsx';
import SideBar from "../common/SideBar.jsx";
import {Button, Autocomplete} from "@mantine/core";
import { CreatePatientModal } from '../modals/CreatePatientModal.tsx';

import EmployeeList from "../employee/EmployeeList.tsx";
import PatientList from "../patient/PatientList.tsx";


const PatientPage = () => {
    return (
        <div className="flex-1 p-4">
            <h1 className="font-bold pl-4 text-2xl">Tana Dental Clinic Management System</h1>

            <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                <CreatePatientModal/>
            </div>
            
            <PatientTab/>
        </div>
    );
}

const EmployeePage = () => {
    return (
        <div className="flex-1 p-4">
            <h1 className="font-bold pl-4 text-2xl">Tana Dental Clinic Management System</h1>

            <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                <CreatePatientModal/>
            </div>
            
            <EmployeeList/>
        </div>
    );
}

const UserDashboard = () => {

    const handleSearch = () => {
        console.log("Searching...");
    };
    

    return (
        <div className="flex h-screen">
            <div>
                <SideNav/>

            </div>
            
            <Outlet/> {/* this will render child routes */}

            <Routes>
                <Route path="employee" element={<EmployeePage/>}/>
                <Route path="patient" element={<PatientPage/>}/>
            </Routes>
        </div>
    );

}

export default UserDashboard
