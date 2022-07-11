import { AuthContext } from 'context'
import React from 'react'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import MyButton from '../button/MyButton'


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
          <div>

            <nav className='navbar'>
                <MyButton onClick={logout}>
                  Выйти
                </MyButton>
              <div className='navbar__links'>
                <Link to="posts">Посты</Link> |{" "}
                <Link to="about">О сайте</Link> 
                
              </div>
             
            </nav>
            <div className="content">
              <Outlet className="outlet"/>
            </div>
          </div>
        
      
  )
}

export default Navbar