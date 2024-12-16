
import React, {useEffect} from 'react';
import {Link, Routes, Route, Outlet} from 'react-router-dom';

import DentalHeader from "../common/DentalHeader.tsx";
import PatientTab from '../common/PatientTabs.jsx';
import { TabVertical, SideNav} from '../common/SideNavigation.tsx';
import SideBar from "../common/SideBar.jsx";
import {Button, Autocomplete} from "@mantine/core";
import { CreatePatientModal } from '../modals/CreatePatientModal.tsx';

import EmployeeList from "../employee/EmployeeList.tsx";
import PatientList from "../patient/PatientList.tsx";
import ServicesTab from '../common/ServicesTab.jsx';
import Navbar from '../Navbar.tsx';
import { NavProvider } from '../shared/NavContext.jsx';


export const PatientPage = () => {
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

export const EmployeePage = () => {
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


export const ServicesPage = () => {
    return (
        <div className="flex-1 p-4">
            <h1 className="font-bold pl-4 text-2xl">Tana Dental Clinic Management System</h1>

            <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                <CreatePatientModal/>
            </div>
            
            <ServicesTab/>
        </div>
    );
}

export const Dashboard = () => {
    
    return (
        
        <div className="flex-1 p-4">
            <h1 className="font-bold pl-4 text-2xl">Tana Dental Clinic Management System</h1>
            
        </div>
    );

}

export const UserDashboard = () => {


    useEffect(() => {
        //
    }, [])
    return (
        <>
        <NavProvider >
            <Navbar/>
            
            
        <div className="flex h-screen">
            <div>

                <SideNav/>

            </div>
            <div>
            <Outlet/> {/* this will render child routes */}

            </div>

            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="employee" element={<EmployeePage/>}/>
                <Route path="home" element={<PatientPage/>}/>
                <Route path="services" element={<ServicesPage/>}/>
            </Routes>
        </div>
        </NavProvider>

        </>
    );

}

export default UserDashboard
