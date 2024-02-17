import React from 'react'
<<<<<<< HEAD
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Reservation from './Pages/Reservation'
import Contacts from './Pages/Contacts'
=======
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Reservation from './Pages/Reservation';
import Contacts from './Pages/Contacts';
import Signup from './Pages/Signup';
import VideoComponent from './Pages/VideoComponent'


>>>>>>> f8250c9 (Login, signup and about page commit)

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/about' Component={About} />
        <Route path='/menu' Component={Menu}/>
        <Route path='/Reservation' Component={Reservation}/>
        <Route path='/Contacts' Component={Contacts}/>
<<<<<<< HEAD
=======
        <Route path='/Signup' Component={Signup}/>

>>>>>>> f8250c9 (Login, signup and about page commit)
      </Routes>
    </>
  )
}

export default App
