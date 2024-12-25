import { Autocomplete, Table } from '@mantine/core';
import { IconEye, IconMan, IconTrash, IconEdit } from '@tabler/icons-react';
import {Dental} from "tabler-icons-react";
import React, { useEffect } from 'react';
import FetchPatients from "./FetchPatients.tsx";
import { PatientStore } from '../../hookStores/PatientStore.tsx';
import { patient } from '../../types/dentalType.tsx';
import { patientApi, employeesGetAllApi} from '../../api/endPoints.jsx';
import axios from 'axios';


const getPatientsList = async  () => {

    const api_url = process.env.REACT_APP_API_URL;
    let user=localStorage.getItem('dentalPass');
    let token = "";
    if (user) {
        token=JSON.parse(user).accessToken;
    }

    const URL = `${api_url}${employeesGetAllApi}`; 
    try{
        const response = await axios.get(URL, {
            headers:{
                'Authorization': `Bearer ${token}`  
            }
        });
        if (response.data){
            console.log("patients dta", response?.data.data);
        }
        return response?.data.data;

    } catch(err) {
        return null
    }
}


const PatientList = (props) => {
    const fetchPatient = PatientStore((state: any) => state.fetchPatient);
    const patientData: patient[] = PatientStore((state: any) => state.data);


    useEffect(() => {
        fetchPatient();
        
      },[]);
    
    const handleSearch = () => {
        console.log("Searching...");
     
    }

    function handlePatientDelete(patient){
        console.log("Patient", patient, "data deleted");
    }
    function handlePatientUpdate(patient){
        console.log(`Patient ${patient} data updated`);

    }
    function viewPatientDetail(patient){
        console.log(`Patient ${patient} detail viewed`);

    }
    function handleAssignDoctor(patient){
        console.log("Doctor assigned to patient", patient);

    }
    
    // console.log("Patient Data: ", patientData);
   var rows:any;
    if (Array.isArray(patientData) && patientData.length > 0){
    rows = patientData.map((element: patient, index) => (
        <tr className="hover:bg-blue-500 " key={index}>
            <td className="border">{index+ 1}</td>
            <td className="border">{element.fname} {element.mname} {element.lname}</td>
            <td className="border">{element.address}</td>
            <td className="border">{element.id}</td>
            <td className="flex">
                <div className="ml-3 hover:text-blue-800 hover:font-bold "
                    onClick={() => handlePatientUpdate(1)} >
                    <IconEdit />
                </div>
                <div className="ml-3 hover:text-blue-800 hover:font-bold "
                    onClick={()=> viewPatientDetail(1)} >
                    <IconEye />
                </div>
                <div className="ml-3 hover:text-blue-800 hover:font-bold hover:-blue-500 " 
                    onClick={() => handlePatientDelete(1)} >
                    <IconTrash />
                </div>
                <div 
                    className="ml-3 hover:text-blue-800 hover:font-bold " 
                    onClick={() => handleAssignDoctor(1)}>
                    <Dental />
                </div>
            
            </td>
        </tr>
    ));
    }
    return (
        <>
        { patientData.length > 0 ? (
        <div>
            
            <div className="text-xl font-bold">
                Patient List
            </div>
            
            <Autocomplete
                className="mt-3 pt-3 rounded-full..."
                placeholder='Search Patient...'
                onChange={handleSearch}
            />
            
            <div>
                <Table 
                    striped
                    highlightOnHover
                    withTableBorder
                    withColumnBorders
                    mt={"sm"}
                >
                <Table.Thead className="border border-collapse">
                    <Table.Tr>
                        <Table.Th className="border">No</Table.Th>
                        <Table.Th className="border">Full Name</Table.Th>
                        <Table.Th className="border">Address</Table.Th>
                        <Table.Th className="border">ID</Table.Th>
                        <Table.Th className="border">Actions</Table.Th>
                        
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody className="border">
                    {rows}
                </Table.Tbody>
                </Table>
            </div>
        </div>
        
        ):(
            <div>Data not found</div>
        )}
    </>

    );
}

export default PatientList
