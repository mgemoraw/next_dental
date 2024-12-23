import axios from "axios";
import { create } from "zustand";
import { patientApi } from "../api/endPoints";
import { patient } from "../types/dentalType";


export const PatientStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchPatient: async (data:patient) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_LOCAL}${patientApi}`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true, // Include cookies in requests
        }
      );
      // const response =  fetch(`${process.env.REACT_APP_API_URL}${patientApi}`)
  
      set({
        data: response?.data || [],
        loading: false,
      });
      
    } catch (err) {
      set({ hasErrors: true, loading: false });
    }
  }, 
}));


export const PatientStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

