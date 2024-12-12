// App.js  
import React from 'react';  
import { Route, Routes } from 'react-router-dom';  
import { AuthProvider } from './pages/AuthContext.tsx';  
import ProtectedRoute from './pages/ProtectedRoute.tsx';  
import Home, {About, Services, Contact} from './pages/Home.tsx';  
import AdminDashboard from './pages/dashboard/AdminDashboard.tsx';  
import UserDashboard from './pages/dashboard/UserDashboard.tsx';  
import Login from './pages/Login.tsx';  
import Signup from './pages/Signup.tsx';  
import {Unauthorized, Error404} from './pages/unauthorized/Unauthorized.tsx';  
import {isAuthenticated} from "./auth/user.tsx";
import Layout from './pages/shared/Layout.tsx';


const App = () => {  
    return (  
        <AuthProvider>  
            <Routes>  
                {/* <Route path="/admin"
                element={
                isAuthenticated() ? <AdminDashboard /> : <Unauthorized/>
                }/> */}

                <Route path="/" element={<Layout />} /> 
                <Route path="/login" element={<Login />} />  
                <Route path="/unauthorized" element={<Unauthorized />} />  
                <Route path="/signup" element={<Signup/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element = {<Error404/>}/>
                    
                <Route  
                    path="/admin"  
                    element={  
                        <ProtectedRoute allowedRoles={['admin']}>  
                            <AdminDashboard />  
                        </ProtectedRoute>  
                    }  
                />  
                <Route  
                    path="/user"  
                    element={  
                        <ProtectedRoute allowedRoles={['user']}>  
                            <UserDashboard />  
                        </ProtectedRoute>  
                    }  
                /> 
                <Route  
                    path="/doctor"  
                    element={  
                        <ProtectedRoute allowedRoles={['doctor']}>  
                            <UserDashboard />  
                        </ProtectedRoute>  
                    }  
                />  
            </Routes>  
        </AuthProvider>  
   
    );  
};  

export default App;