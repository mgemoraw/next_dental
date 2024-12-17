import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const initialUserState = {
  role: null,
  username: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
    
    let userData = localStorage.getItem("user");
    if (userData){
        userData = JSON.parse(userData);
    }

    const [user, setUser] = useState(userData);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser){
        setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    const updatedUser = { ...userData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(initialUserState);
    localStorage.removeItem("user");
    localStorage.removeItem("dentalPass");
  };

  const refreshUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : initialUserState);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};