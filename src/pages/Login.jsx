import MyButton from 'components/UI/button/MyButton'
import MyInput from 'components/UI/input/MyInput'
import { AuthContext } from 'context'
import React from 'react'
import { useContext } from 'react'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
  return (
    <div>
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Введите логин' />
            <MyInput type="text" placeholder='Введите пароль' />
            <MyButton>Ввойти</MyButton>
        </form>
    </div>
  )
}

export default Login