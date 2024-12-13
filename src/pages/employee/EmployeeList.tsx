import { Table } from '@mantine/core';
import React from 'react';
import {useEffect, useState} from 'react';


const EmployeeList = () => {
    const [employees, setEmployees] = useState(null);


    const fetchEmployeeData = () => {
        //
    };

    useEffect(() => {
        // use effect logic
    }, []);



    return (
        <div>
            <table class="table-auto">
                <thead>
                    <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default EmployeeList