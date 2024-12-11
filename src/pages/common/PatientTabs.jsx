import React from 'react';
import {Tabs} from "@mantine/core";
import { IconHome, IconManFilled } from '@tabler/icons-react';


function PatientTab(){

    return (
        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="me-2">
                    <a href="#" aria-current="page" className="inline-flex p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"><IconHome/>Home</a>
                </li>
                <li className="me-2">
                    <a className="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-500 dark:hover:text-gray-300 group"><IconManFilled/>Patients</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-500 dark:hover:text-gray-300 group">Appointments</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-500 dark:hover:text-gray-300 group">
                    <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"></svg>Profile
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default PatientTab
