// ProtectedRoute.js  
import React from 'react';  
import {Navigate } from 'react-router-dom';  
import { useAuth } from './AuthContext.tsx';  


const ProtectedRoute = ({ children, allowedRoles }) => {  
    const { user } = useAuth();  

    console.log("========= protected========");
    console.log("User data", user);

    // Check if user is authenticated and has the right role  
    const hasAccess = user && allowedRoles.includes(user.role);  
    // If the user does not have access, redirect  
    if (!user) {  
        return <Navigate to="/login" replace />;  
    } 
    if (!hasAccess) {  
        return <Navigate to="/unauthorized" replace />;  
    }
   

    // If the user has access, render the children (protected component)  
    return children;  
};  

export default ProtectedRoute; 
