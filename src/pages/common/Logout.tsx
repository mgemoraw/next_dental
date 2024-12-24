import React from 'react';
import axios from "axios";
import {logoutApi} from "../../api/endPoints.jsx";
import { IconLogout } from "@tabler/icons-react";


export const Logout = () => {
    const logout = async () => {
        try {
            localStorage.removeItem('dentalPass');
            localStorage.removeItem('user');
            const apiURL = process.env.REACT_APP_API_URL_LOCAL;
            const api_url = `${apiURL}${logoutApi}`;
            const res = await axios.post(api_url, {}, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    },
                withCredentials: true, // Include cookies in the request
            });
            console.log("Logged out successfully");
            console.log(res);
            // Redirect to login page or clear frontend state
            window.location.href = "/login";
        } catch (error) {
            console.error("Error during logout:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <button onClick={logout}>
                <IconLogout/>
            </button>
        </div>
    );
}