import React from 'react'
import './App.css'
import Nav from './Components/NavbarDummy/Nav'
import Login from './Components/LoginPage/login'
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUpPage/SignUp'
import HomePage from './Components/HomePage/HomePage'
import Report from './Components/ReportPage/Report'

const App = () => {
  return (
    <div>
    <Nav /> 
    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/report" element={<Report/>} />
    </Routes>
  </div>

  )
}

export default App
