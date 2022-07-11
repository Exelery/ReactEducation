
import React, { useState } from 'react'
import './styles/app.css'
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";

import AppRouter from './components/AppRouter';
import { AuthContext } from 'context';
import { useEffect } from 'react';


function App() {
  
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true)

  useEffect(()=> {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}


export default App;
