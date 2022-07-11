import { AuthContext } from 'context';
import React from 'react'
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'

import { publicRoutes, privateRoutes } from 'router';
import Loader from './UI/Loader/Loader';
import Navbar from './UI/Navbar/Navbar';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if(isLoading) {
    return <Loader/>
  }
  return (
    isAuth
      ?
      
            <Routes>

            <Route path='/' element={<Navbar/>}>

            {privateRoutes.map(route => 
              
              <Route 
              path={route.path}
              element={<route.element/>}
              key={route.path}
              />
            )}
            {privateRoutes.map(route => 
              
              <Route 
              path={route.path}
              element={<route.element/>}
              key={route.path}
              />
            )}
          </Route>
           
        </Routes>

        : 

        <Routes>

          <Route path='/' element={<Navbar/>}>

                {publicRoutes.map(route => 
                  
                  <Route 
                  path={route.path}
                  element={<route.element/>}
                  />
                )}
                
          </Route>


        </Routes>
    
  )
}

export default AppRouter