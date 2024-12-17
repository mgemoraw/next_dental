import axios from "axios";
import { create } from "zustand";
import { productGetAllApi } from "../api/endPoints";
import { product } from "../types/dentalType";


export const ProductStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetchProduct: async (data:product) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${productGetAllApi}`
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


export const ProductStoreList = create(() =>({
  data: [],
  loading: false,
  hasErrors: false,
})) ;

