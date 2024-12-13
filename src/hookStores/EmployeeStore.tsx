import axios from "axios";
import { create } from "zustand";
import { employeesGetAllApi } from "../api/endPoints";
import { Employee } from "../types/dentalType";


export const EmployeeStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchPatient: async (data:Employee) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${employeesGetAllApi}`
      );
      // const response =  fetch(`${process.env.REACT_APP_API_URL}${patientApi}`)
  
      set({
        data: response?.data.data || [],
        loading: false,
      });
      
    } catch (err) {
      set({ hasErrors: true, loading: false });
    }
  }, 
}));


export const EmployeeStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

