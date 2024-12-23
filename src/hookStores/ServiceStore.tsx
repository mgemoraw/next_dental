import axios from "axios";
import { create } from "zustand";
import { serviceGetAllApi } from "../api/endPoints";
import { service } from "../types/dentalType";


export const ServiceStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchService: async (data:service) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_LOCAL}${serviceGetAllApi}`,{
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


export const ServiceStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

