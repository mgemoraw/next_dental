import React, { useState } from 'react';  
import { IconEye, IconEyeOff } from '@tabler/icons-react';

export const Login = () => {  
  const [showPassword, setShowPasword] = useState(false);
  const [email, setEmail] = useState("");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">  
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">  
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>  
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
              placeholder="you@example.com"  
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
            Log In  
          </button>  
        </form>  
        <p className="mt-4 text-sm text-center text-gray-600">  
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>  
        </p>  
      </div>  
    </div>  
  );  
};  

