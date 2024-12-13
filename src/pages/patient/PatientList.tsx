import { Autocomplete } from '@mantine/core';
import { IconEye, IconMan, IconTrash, IconEdit } from '@tabler/icons-react';
import {Dental} from "tabler-icons-react";
import React from 'react';
import FetchPatients from "./FetchPatients.tsx";
import { PatientStore } from '../../hookStores/PatientStore.tsx';

const PatientList = (props) => {
    const fetchPatient = PatientStore((state: any) => state.fetchPatient);
    const patientData: patient[] = PatientStore((state: any) => state.data);
    const patients = FetchPatients();
    const handleSearch = () => {
        console.log("Searching...");
    }

    function handlePatientDelete(patient){
        console.log("Patient", patient, "data deleted");
    }
    function handlePatientUpdate(patient){
        console.log(`Patient ${patient} data updated`);
        console.log(fetchPatient);

    }
    function viewPatientDetail(patient){
        console.log(`Patient ${patient} detail viewed`);

    }
    function handleAssignDoctor(patient){
        console.log("Doctor assigned to patient", patient);

    }
    return (
        <div>
            <div class="text-xl font-bold">
                Patient List
            </div>
            <Autocomplete
                className="mt-3 pt-3 rounded-full..."
                placeholder='Search Patient...'
                onChange={handleSearch}
            />
            <div>
                <table className="table-auto border border-collapse">
                <thead className="border border-collapse">
                    <tr>
                        <th className="border">No</th>
                        <th className="border">PID</th>
                        <th className="border">Name</th>
                        <th className="border">Age</th>
                        <th className="border">Actions</th>
                        
                    </tr>
                </thead>
                <tbody class="border">
                    <tr className="hover:text-blue-800 ">
                        <td class=" border border-slate-300">1</td>
                        <td className="border">p300</td>
                        <td className="border">John Carter Bill</td>
                        <td className="border">33</td>
                        <td className="flex m-3 border">
                            <div className="ml-3 hover:bg-blue-100 "
                                onClick={() => handlePatientUpdate(1)} >
                                <IconEdit />
                            </div>
                            <div className="ml-3 hover:bg-blue-100 "
                                onClick={()=> viewPatientDetail(1)} >
                                <IconEye />
                            </div>
                            <div className="ml-3 hover:bg-blue-100 " 
                                onClick={() => handlePatientDelete(1)} >
                                <IconTrash className="text-red-800 font-bold" />
                            </div>
                            <div 
                                className="ml-3 hover:bg-blue-100 " 
                                onClick={() => handleAssignDoctor(1)}>
                                <Dental />
                            </div>
                            
                        </td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientList
