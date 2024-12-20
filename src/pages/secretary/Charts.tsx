import ReactApexChart from "react-apexcharts";
import React, {useState, useEffect} from  'react';
import { BarChart } from "@mantine/charts";
import { PatientStore } from "../../hookStores/PatientStore.tsx";
import { EmployeeStore } from "../../hookStores/EmployeeStore.tsx";
import { ProductStore } from "../../hookStores/ProductStore.tsx";
import { ServiceTypeStore } from "../../hookStores/ServiceTypeStore.tsx";
import { PaymentStore } from "../../hookStores/PaymentStore.tsx";
import { ServiceStore } from "../../hookStores/ServiceStore.tsx";
import { Employee, patient, payment, product, service } from "../../types/dentalType.tsx";
import { getFontSize } from "@mantine/core";

const SecretaryHomePageCharts = () => {
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
  

  const data = [
    { month: 'January', Patients: patientData.length, Services: serviceData.length, Employees: employeeData.length },
    { month: 'Februaray', Patients: patientData.length, Services: serviceData.length, Employees: employeeData.length },
    { month: 'March', Patients: patientData.length, Services: serviceData.length, Employees: employeeData.length },
    
  ];



  useEffect(()=> {
    fetchEmployees();
    fetchPatients();
    fetchServiceTypes();
    fetchServices();
    fetchProducts();
    fetchPayments();
}, []);

 return (
  <div>
    <BarChart className="hover:bg-white h-full w-full p-0 m-0"
      
      data={data}
      dataKey="month"
      type="stacked"
      color='rgba(0, 0, 0, 100)'
      withLegend
      series={[
        { name: 'Patients', color: 'violet.6' },
        { name: 'Services', color: 'blue.6' },
        { name: 'Employees', color: 'teal.6' },
      ]}
      tickLine="y"
    />
    </div>
 );
}

export const ApexChart = () => {
    const [state, setState] = React.useState({
      
        series: [{
          name: 'Debit',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Credit',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line'
          },
          dataLabels: {
            enabled: true
          },
          title: {
            text: "Payments Received",
            align: 'left',
            margin: 10,
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#263238'
            }
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }
