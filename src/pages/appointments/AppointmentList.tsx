import React from 'react';
import { Autocomplete } from "@mantine/core";
import { useState } from "react";


export const AppointmentsList = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const handleSearch = (data) => {
        console.log("...Searching...")
    } 

    return (
        <div>
            <Autocomplete
                className="mt-3 pt-3 rounded-full..."
                placeholder='Search Appointments...'
                onChange={()=>handleSearch}
            />
        </div>
    );
}