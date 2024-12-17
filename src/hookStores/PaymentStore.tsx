import axios from "axios";
import { create } from "zustand";
import { getAllPaymentsApi, patientApi } from "../api/endPoints";
import { payment } from "../types/dentalType";


export const PaymentStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchPayment: async (data:payment) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${getAllPaymentsApi}`
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


export const PaymentStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

