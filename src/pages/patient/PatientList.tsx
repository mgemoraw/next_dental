import { Autocomplete } from '@mantine/core';
import React from 'react';


const PatientList = (props) => {

    const handleSearch = () => {
        console.log("Searching...");
    }
    return (
        <div>
            <Autocomplete
                className="mt-3 pt-3 rounded-full..."
                placeholder='Search Patient...'
                onChange={handleSearch}
            />
        </div>
    );
}

export default PatientList
