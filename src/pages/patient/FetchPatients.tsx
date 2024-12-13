import React from 'react';
import axios from 'axios';
import {patientApi} from "../../api/endPoints";



const FetchPatients = async  () => {

    const api_url = process.env.REACT_APP_API_URL;

    const URL = `${api_url}${patientApi}`; 
    try{
        const response = await axios.get(URL);
        if (response.data){
            console.log("patients dta", response?.data.data);
        }
        return response.data;

    } catch(err) {
        return null
    }
    
}
export default FetchPatients