import React, {useState, useEffect} from 'react';

import {ServiceStore} from "../../hookStores/ServiceStore.tsx";
import {service} from "../../types/dentalType.tsx";
import {IconEye, IconTrash, IconEdit} from "@tabler/icons-react";
import { Autocomplete } from '@mantine/core';


function ServicesList() {

    const fetchService = ServiceStore((state:any)=> state.fetchService);
    const serviceData: service [] = ServiceStore((state:any) => state.data);

    useEffect(()=> {
        fetchService();
    }, []);

    const handleSearch = () => {
        // 
    }
    const handleServiceDelete = (serviceId) => {
        // 
    }

    const handleServiceUpdate = (serviceId) => {
        // 
    }
    const viewServiceDetail = (serviceId) => {
        // 
        console.log("service detail", serviceId, "viwed...");
    }



    var rows = serviceData.map((element:service, index)=> (
        <tr className="hover:bg-blue-100" key={index} onClick={()=>viewServiceDetail(index)}>
            <td className="border border-slate-300 ">{index + 1}</td>
            <td className="border border-slate-300 ">{element.name}</td>
            <td className="border border-slate-300 ">{element.price}</td>
            <td className="flex border border-slate-300 "><div className="ml-3 hover:text-blue-800 hover:font-bold "
                    onClick={() => handleServiceUpdate(1)} >
                    <IconEdit />
                </div>
                <div className="ml-3 hover:text-blue-800 hover:font-bold "
                    onClick={()=> viewServiceDetail(1)} >
                    <IconEye />
                </div>
                <div className="ml-3 hover:text-blue-800 hover:font-bold hover:-blue-500 " 
                    onClick={() => handleServiceDelete(1)} >
                    <IconTrash />
                </div>
                
            </td>
        </tr>
    ));
    return (
        <>
            {serviceData.length > 0 && (
                <div>
                    <div>Service List</div>
                    <Autocomplete
                className="mt-2 pt-2 rounded-full mb-1 pb-3"
                placeholder='Search Patient...'
                onChange={handleSearch}
                />

                <div>
                    <table className="w-full text-blue-800 border-collapse border border-slate-400 ...">
                        <tr className>
                            <th className="border border-slate-300 py-3 px-6">No</th>
                            <th className="border border-slate-300 py-3 px-6">Service Name</th>
                            <th className="border border-slate-300 py-3 px-6">Price (Birr)</th>
                            <th className="border border-slate-300 py-3 px-6">Actions</th>
                        </tr>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
                
            )}
        </>
    );
}

export default ServicesList

