import React, { useState, useEffect } from 'react';  
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from '@mantine/form';
import {useSetState} from '@mantine/hooks';
import axios from 'axios';
import { IconCheck, IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import Navbar from "./Navbar.tsx";
import { loginApi } from "../../api/endPoints.jsx";
import {useAuth} from "./AuthContext.tsx";

const Login = () => {  
  const {login} = useAuth();
  const [showPassword, setShowPasword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');  
  const [loading, setLoading] = useState(false);  

  const navigate = useNavigate();

  
  const [state, setState] = useSetState({
    formSubmitting: false,
    loginError: "",
  });
  const formData = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value ? null : "invalid user name"),
      password: (value) => (value.length > 0 ? null : "password too short"),
    },
  });
  
  const togglePasswordVisibility = () => {
    setShowPasword(!showPassword);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    setLoading(true); // Set loading state  
    setError(''); // Reset error state 
    const apiURL = process.env.REACT_APP_API_URL_LOCAL;
    console.log(apiURL);
    const api_url = `${apiURL}${loginApi}`;
    // const api_url = `${apiURL}users/login`;

    try {  
      const response = await axios.post(api_url, {  
          username,  
          password,   
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true, // Include cookies in requests
      }
    ); 
      console.log("login response", response);

      if (response.data.access_token) {  
        // save user and password in the cache (local storage)
        var userData = {
          accessToken: response.data.accesstoken,
          username: response.data.username,
          role: response.data.role // "user", // response.data.data.role,
        };
        localStorage.setItem("dentalPass", JSON.stringify(userData))
        localStorage.setItem("user", JSON.stringify(userData));
        console.log(userData);

        // Redirect to a protected route or update state accordingly  
        login(userData);
        // navigate(`/${userData.role}`);
        navigate("/home");

    } else {
      console.log(response.data.status);
      if (!response.data.status) {
        notifications.show({
          id: 'user-login',
          position: 'top-center',
          withCloseButton: true,
          autoClose: 5000,
          title: "Login Failed",
          message: 'User name or password is incorrect!',
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          style: {color: 'blue', zIndex: 1001},
          loading: false,
        });
      } 
     
    }
    
    
    

    } catch (err) {  
        // Handle error  
        setError('Login failed. Please check your username and password.');  
        console.error(err);  

        notifications.show({
          id: 'user-login',
          position: 'bottom-center',
          withCloseButton: true,
          autoClose: 5000,
          title: "Login Failed",
          message: 'User name or password is incorrect!',
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          style: {color: 'blue'},
          loading: false,
        });
    } finally {  
        setLoading(false); // Reset loading state 
        // console.log("Email: ", email, "Password: ", password);

    }  
  };

 

  return (
    <>
    {/* <Navbar/> */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100">  
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">  
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Name</label>  
            <input  
              type="text"  
              id="username"  
              required  
              value={username}  
              onChange={(e) => setUsername(e.target.value)}  
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
              placeholder="Username"  
            />  
          </div>  
          <div className="mb-4">  
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>  
            <div className="relative">  
              <input  
                type={showPassword ? 'text' : 'password'}  
                id="password"  
                required  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
                placeholder="********"  
              />  
              <button  
                type="button" 
                
                onClick={togglePasswordVisibility}  
                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-500"  
              >  
                {showPassword ? 
                (<IconEye className="h-5 w-5" aria-hidden={true}/>)
                : (<IconEyeOff className="h-5 w-5" aria-hidden={true}/>)
              }  
              </button>  
            </div>  
          </div>  
          <button  
            type="submit"  
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mt-4 transition duration-200"  
          >  
            {loading ? "Logging in..." : "Log In" }
          </button>  
        </form>  
        {/* <p className="mt-4 text-sm text-center text-gray-600">  
          Don't have an account?  <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>  
        </p>   */}
      </div>  
    </div>
    </> 
  );  
};  

export default Login