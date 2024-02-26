import React from 'react'
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Reservation from './Pages/Reservation';
import Contacts from './Pages/Contacts';
import Signup from './Pages/Signup';
import Gallery from './Pages/Gallery';

import VideoComponent from './Pages/VideoComponent'



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
        <Route path='/Signup' Component={Signup}/>
        <Route path='/Gallery' Component={Gallery}/>

      </Routes>
    </>
  )
}

export default App
