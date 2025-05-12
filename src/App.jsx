import React from 'react'
import './App.css'
import Nav from './Components/NavbarDummy/Nav'
import Login from './Components/LoginPage/login'
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUpPage/SignUp'
import HomePage from './Components/HomePage/HomePage'
import Report from './Components/ReportPage/Report'
import Contact from './Components/ContactPage/Contact';

const App = () => {
  return (
    <div>
    <Nav /> {/* Your Navbar with links to Login and Sign Up */}
    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/report" element={<Report/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* Other routes can go here */}
    </Routes>
  </div>

  )
}

export default App
