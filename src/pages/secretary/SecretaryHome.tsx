import React, {useEffect, useState} from 'react'
import { PatientStore } from '../../hookStores/PatientStore.tsx'
import { EmployeeStore } from '../../hookStores/EmployeeStore.tsx';
import { ProductStore } from '../../hookStores/ProductStore.tsx';
import { ServiceStore } from '../../hookStores/ServiceStore.tsx';
import { ServiceTypeStore } from '../../hookStores/ServiceTypeStore.tsx';
import { Employee, patient, payment, product, service } from '../../types/dentalType';
import { PaymentStore } from '../../hookStores/PaymentStore.tsx';
import ReactApexChart from 'react-apexcharts';
import { BarChart } from '@mantine/charts';
import { rgba } from '@mantine/core';
import { AppointmentCard, CreditCard, DebitCard, MessageCard, PatientCard, UpcomingEvents } from './SecretaryCards.tsx';
import {CalendarCard, CalendarWidget} from "./EventCalendar.tsx";
import UpcomingMeetings from './UpcomingEvents.tsx';



function SecretaryHomePage(){

    const fetchPatients = PatientStore((state:any)=> state.fetchPatient); 
    const fetchEmployees = EmployeeStore((state:any)=> state.fetchEmployee); 
    const fetchProducts = ProductStore((state:any)=> state.fetchProduct); 
    const fetchServices = ServiceStore((state:any)=> state.fetchService); 
    const fetchServiceTypes = ServiceTypeStore((state:any)=> state.fetchServiceType); 
    const fetchPayments = PaymentStore((state:any) => state.fetchPayment);

    const patientData:patient[] = ProductStore((state:any)=> state.data);
    const employeeData:Employee[] = EmployeeStore((state:any)=> state.data);
    const serviceData:service[] = ServiceStore((state:any)=> state.data);
    const paymentData:payment[] = PaymentStore((state:any)=> state.data);
    const productData:product[] = ProductStore((state:any)=> state.data);

   

    useEffect(()=> {
        fetchEmployees();
        fetchPatients();
        fetchServiceTypes();
        fetchServices();
        fetchProducts();
        fetchPayments();
    }, [])

    

    return (
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
         <div className="grid grid-cols-1 gap-2">
          
          <AppointmentCard/>

          <PatientCard />
          
        </div>
        <div className="grid grid-cols-1 gap-2 ">
          <MessageCard/>
          <UpcomingEvents/>
        </div>

        <div className="grid grid-cols-1 gap-1">
            <h1 className="text-gray-900 text-xl font-bold">
              Today: <span className="text-blue-800"> {new Date().toDateString()}</span>
            </h1>
            <CalendarWidget/>

          </div>
       
      </div>
        
    );
}

export default SecretaryHomePage