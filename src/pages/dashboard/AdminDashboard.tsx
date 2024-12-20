

import React, { useState } from 'react';
import Navbar from "../common/Navbar.tsx"
import SideBar from '../common/SideBar.jsx';
import { PatientCard } from '../secretary/SecretaryCards.tsx';
import { Badge, Button, Card, Group, Paper, Text } from '@mantine/core';
import { IconReceipt, IconUsersGroup } from '@tabler/icons-react';
import {PatientsCard, EmployeesCard, PaymentsCard, ServicesCard} from "./AdminCards.jsx";
import { ApexChart } from '../secretary/Charts.tsx';
import { PriceChart } from './AdminCharts.tsx';


const AdminDashboard = () => {
  


    return (
        <div className="w-full">
            <div className="w-full items-center justify-center">
                <h1 className= "p-4 m-4 text-2xl font-bold text-black">Admin Dashboard</h1>

            </div>
            <div className="grid grid-cols-4 gap-2 row-span-1">
                <PatientsCard/>
                <EmployeesCard/>
                <ServicesCard/>
                <PaymentsCard/>
            </div>
            <div className="grid grid-cols-3 row-span-1">
                <div className="grid grid-col-2 col-span-2 gap-2">
                    {/* <h1 className="bg-slate-300"> Revenue Generated</h1> */}
                    <PriceChart/>
                </div>

                <div className="grid grid-col-1 col-span-1">
                    {/* <h1 className="bg-slate-300"> recent transactions</h1> */}
                    <PatientCard/>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="grid grid-col-1 col-span">
                    
                    {/* <h1 className="bg-slate-300"> Chart 1 stock products</h1> */}
                    <ApexChart/>
                </div>

                <div className="grid grid-col-1 col-span-1">
                    {/* <h1 className="bg-slate-300"> Chart 2 services</h1> */}
                    <ApexChart/>

                </div>

                <div className="grid grid-col-1 col-span-1">
                    {/* <h1 className="bg-slate-300"> Chart 3 map</h1> */}
                    <ApexChart/>
                        
                </div>
            </div>

           

          
            
        </div>
    );

}

export default AdminDashboard