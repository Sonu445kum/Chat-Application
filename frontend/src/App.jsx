import React from 'react'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthContext } from './Context/AuthContext'

const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>
      <Route path='/' element={ authUser? <Home/>: <Navigate to='/login'/>}/>
      <Route path='/login' element={ authUser ? <Navigate to='/'/> :<Login/>}/>
      <Route path='/signup' element={ authUser ? <Navigate to='/'/> : <Signup/>}/>
     </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
