import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'

function App() {
   

  return (
   <div>
    <Navbar />
    <Outlet />
   </div>
  )
}

export default App
