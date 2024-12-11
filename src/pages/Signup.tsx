
import React, { useState } from 'react';  
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar.tsx";


const Signup = () => {
    const [showPassword, setShowPasword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const togglePasswordVisibility = () => {
    setShowPasword(!showPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
    console.log("Email: ", email, "Password: ", password);
  }

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> 
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">  
        
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2> 
        
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>  
            <input  
              type="email"  
              id="email"  
              required  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
              placeholder="Email"  
            />  
          </div>
          <div className="mb-4">  
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">User Name</label>  
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
            <label htmlFor="password1" className="block text-sm font-medium text-gray-700">Password</label>  
            <div className="relative">  
              <input  
                type={showPassword ? 'text' : 'password'}  
                id="password1"  
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

            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Confirm Password</label>  
            <div className="relative">  
              <input  
                type={showPassword ? 'text' : 'password'}  
                id="password2"  
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
            Sign Up 
          </button>  
        </form>  
        <p className="mt-4 text-sm text-center text-gray-600">  
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>  
        </p>  
      </div>  

    </div>
  </>
  );
}

export default Signup
