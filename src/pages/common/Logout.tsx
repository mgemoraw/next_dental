import axios from "axios";
import {logoutApi} from "../../api/endPoints.jsx";

export const logout = async () => {
  try {

    const apiURL = process.env.REACT_APP_API_URL_LOCAL;
    const api_url = `${apiURL}${logoutApi}`;
    await axios.post(api_url, {}, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
        withCredentials: true, // Include cookies in the request
    });
    console.log("Logged out successfully");
    // Redirect to login page or clear frontend state
    window.location.href = "/login";
  } catch (error) {
    console.error("Error during logout:", error.response?.data || error.message);
  }
};
