import React from 'react';
import {useState, useEffect} from 'react';
import {Tabs} from "@mantine/core";
import {Link} from 'react-router-dom';
import {IconHomeFilled, IconAlarmFilled, IconManFilled, IconAlarm, IconNotification, IconBellFilled} from '@tabler/icons-react';
import {Autocomplete} from "@mantine/core";
import PatientList from "../patient/PatientList.tsx";
import { CreatePatientModal } from '../modals/CreatePatientModal.tsx';
import {AppointmentsList} from "../appointments/AppointmentList.tsx";

function PatientTab(){

    const [toggleState, setToggleState]  = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
        console.log("Hello Tabs ", index);
    }

    return (
        <div>
            <div className="bloc-tabs flex bg-gray-50 rounded-xl p-1 m-1 h-16 items-center">

                <div className={toggleState === 1 ? "flex text-blue-500 p-4 m-4 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 hover:font-bold text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(1)}
                >
                    <IconManFilled className="mr-2"/>
                    Patients
                </div>

                <div className={toggleState === 2 ?  "flex text-blue-500 p-4 m-4 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 hover:font-bold text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(2)}
                >
                    <IconAlarmFilled className="mr-2"/>
                    Appointments
                </div>

                <div className={toggleState === 3 ?  "flex text-blue-500 p-4 m-4 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 hover:font-bold text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(3)}
                >
                    <IconBellFilled className="mr-2"/>
                    Notifications
                </div>
            </div>
            
            {/* add elements inside tabs */}
            {toggleState === 1 ? <PatientList/> : <></>}
            {toggleState === 2 ? <AppointmentsList/> : <></>}
            
        </div>
    );
}

export default PatientTab
