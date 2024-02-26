import React from 'react'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Reservation from './Pages/Reservation'
import Contacts from './Pages/Contacts'
import Signup from './Pages/Signup'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/about' Component={About} />
        <Route path='/menu' Component={Menu}/>
        <Route path='/reservation' Component={Reservation}/>
        <Route path='/contacts' Component={Contacts}/>
      </Routes>
    </>
  )
}

export default App
