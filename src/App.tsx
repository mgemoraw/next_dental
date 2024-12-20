// App.js  
import React from 'react';  
import { Outlet, Route, Routes } from 'react-router-dom';  
import { AuthProvider } from './pages/common/AuthContext.tsx';  
import ProtectedRoute from './pages/common/ProtectedRoute.tsx';  
import Home, {About, Services, Contact} from './pages/common/Home.tsx';  
import AdminDashboard from './pages/dashboard/AdminDashboard.tsx';  
import UserDashboard, { Dashboard } from './pages/dashboard/UserDashboard.tsx';  
import Login from './pages/common/Login.tsx';  
import Signup from './pages/common/Signup.tsx';  
import {Unauthorized, Error404} from './pages/unauthorized/Unauthorized.tsx';  
import {isAuthenticated} from "./auth/user.tsx";
import Layout from './pages/shared/Layout.tsx';


const App = () => {  
    return (  
        <AuthProvider children={undefined} >  
            <Routes>  
                {/*
                 <Route path="/admin"
                element={
                isAuthenticated() ? <AdminDashboard /> : <Unauthorized/>
                }/> 
                */}

                
                <Route path="/*" element={
                    <ProtectedRoute allowedRoles={["user"]} children={undefined}>
                        {/* <Layout/> */}
                        <UserDashboard />
                    </ProtectedRoute>
                    } 
                /> 
                <Route path="/login" element={<Login />} />  
                <Route path="/unauthorized" element={<Unauthorized />} /> 
                <Route path="/signup" element={<Signup/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />

                {/* <Route path="/services" element={<Services/>} /> */}
                {/* <Route path="/dashboard" element={<>Dashboard</>} /> */}
                {/* <Route path="/products" element={<>Products</>} /> */}
                {/* <Route path="/settings" element={<>Settings</>} /> */}
                {/* <Route path="/overview" element={<Dashboard/>} /> */}

                <Route path="*" element = {<Error404/>}/>

                    
                {/* <Route  
                    path="/admin"  
                    element={  
                        <ProtectedRoute allowedRoles={['admin']} children={undefined}>  
                            <AdminDashboard /> 
                        </ProtectedRoute>  
                    }  
                />   */}
                <Route  
                    path="/*"  
                    element={  
                        <ProtectedRoute allowedRoles={['user']} children={undefined}>  
                            <UserDashboard />  
                        </ProtectedRoute>  
                    }  
                /> 
                {/* <Route  
                    path="/*"  
                    element={  
                        <ProtectedRoute allowedRoles={['doctor']} children={undefined}>  
                            <UserDashboard />  
                        </ProtectedRoute>  
                    }  
                />   */}
            </Routes>  
            <Outlet/>

        </AuthProvider>  
   
    );  
};  

export default App;