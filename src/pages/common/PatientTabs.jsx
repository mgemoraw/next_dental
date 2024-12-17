import React from 'react';
import {useState, useEffect} from 'react';
import {Tabs} from "@mantine/core";
import {Link} from 'react-router-dom';
import {IconHomeFilled, IconAlarmFilled, IconManFilled, IconAlarm, IconNotification, IconBellFilled, IconHome2, IconMessage2, IconLayout2} from '@tabler/icons-react';
import {Autocomplete} from "@mantine/core";
import PatientList from "../patient/PatientList.tsx";
import { CreatePatientModal } from '../modals/CreatePatientModal.tsx';
import {AppointmentsList} from "../appointments/AppointmentList.tsx";
import MessageList from "../messages/MessageList.tsx";
import SecretaryHomePage from "../secretary/SecretaryHome.tsx";


function PatientTab(){

    const [toggleState, setToggleState]  = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
        console.log("Hello Tabs ", index);
    }

    return (
        <div>
            <div className="bloc-tabs flex bg-gray-50 rounded-xl h-16 items-center">

                <div className={toggleState === 1 ? "flex text-blue-500 rounded-xl p-4 m-4 ml-0 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(1)}
                >
                    <IconLayout2 className="mr-2"/>
                    Home
                </div>

                <div className={toggleState === 2 ? "flex text-blue-500 rounded-xl p-4 m-4 ml-0 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(2)}
                >
                    <IconManFilled className="mr-2"/>
                    Patients
                </div>

                <div className={toggleState === 3 ?  "flex text-blue-500 rounded-xl p-4 m-4 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(3)}
                >
                    <IconAlarmFilled className="mr-2"/>
                    Appointments
                </div>

                <div className={toggleState === 4 ?  "flex text-blue-500 rounded-xl p-4 m-4 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                    onClick={()=> toggleTab(4)}
                >
                    <IconMessage2 className="mr-2"/>
                    Messages
                </div>
            </div>
            
            {/* add elements inside tabs */}
            {toggleState === 1 ? <SecretaryHomePage/> : <></>}
            {toggleState === 2 ? <PatientList/> : <></>}
            {toggleState === 3 ? <AppointmentsList/> : <></>}
            {toggleState === 4 ? <MessageList/> : <></>}
            
        </div>
    );
}

export default PatientTab
