type service_type = {
  id: number;
  name: string;
  code: string;
};
type service = {
  id: number;
  servicetype_idfk: service_type;
  name: string;
  code: string;
  price: number;
};

type product = {
  id: number;
  name: string;
  materialtype: string;
  manufacturer: string;
  salemargin: number;
};

type inventory = {
  id: number;
  product_idfk: product;
  quantity: number;
  buyunitprice: number;
  salesmargin: number;
};

type patient = {
  id: string;
  fname: string;
  mname: string;
  lname: string;
  dob: Date;
  ecdob: string;
  sex: string;
  sexcode: number;
  sextext: string;
  preferredlanguage: number;
  occupation: string;
  address: string;
  phonenumber: string;
  email: string;
  previousmedicalcondition: string;
  emergencycontact: string;
  sergicalhistory: string;
};

type Appointment = {
  id: number;
  patient_idfk: patient;
  appdate: Date;
  dischargedate: Date;
  description: string;
  appointementtype: string; //Checkup	Follow-Up Treatment  Other
  patientnotified: boolean; // true/false, default false,
  doctor_idfk: string;
  status: string; // admitted, completed, appointed, cancelled
};

type appointment_service = {
  /// treatment
  id: number;
  appointement_idfk: Appointment;
  service_idfk: string;
  status: string; // pending, completed, cancelled
  description: string;
};

type treatment_product = {
  id: number;
  appointementservice_idfk: appointment_service;
  product_idfk: string;
  productquantity: string;
};

type billing = {
  id: number;
  appointment_idfk: Appointment;
  billingdate: Date;
  paymentplan: string;
};

type billing_appointment_service = {
  id: number;
  billing_idfk: billing;
  billingappointementserviceid: string;
  serviceorproductid: string;
  unitprice: number;
  quantity: number;
  paymentplan: string;
};

type payment = {
  id: number;
  billing_idfk: string;
  paymentdate: Date;
  paidamount: number;
  paymentstatus: String;
};

type Employee = {
  fname: string;
  mname: string;
  lname: string;
  sex: string;
  address: Address;
  user: User;
  contact: Contact;
  
};
type Address = {
  city: string;
  address1: string;
  address2: string;
};
type Contact = {
  fixedphone: string;
  mobilephone: string;
  email: string;
};
type User = {
  username: string;
  password: string;
  password_repeat: string;
};
export type {
  payment,
  product,
  billing,
  billing_appointment_service,
  treatment_product,
  Appointment,
  appointment_service,
  patient,
  inventory,
  service,
  service_type,
  Employee,
  User,
  Address,
  Contact,
};
