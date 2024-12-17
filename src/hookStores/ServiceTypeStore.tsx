import axios from "axios";
import { create } from "zustand";
import { serviceTypeGetAllApi } from "../api/endPoints";
import { service_type } from "../types/dentalType";


export const ServiceTypeStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchServiceType: async (data:service_type) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${serviceTypeGetAllApi}`
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


export const ServiceTypeStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

