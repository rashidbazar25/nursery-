
import './App.css'
import { Route ,Routes } from 'react-router-dom'
import Login from './Commponts/Login'
import Regester from './Commponts/Regester'
import ProtectedRout from './Commponts/ProtectedRout'
import Home from './Commponts/Home'
import About from './Commponts/About'
import Approach from './Commponts/Approach'
import Contact from './Commponts/Contact'
import Gallery from './Commponts/Gallery'
import Daycare from './Commponts/Daycare'
import Team from './Commponts/Team'
import { Container } from '@mui/material'
import LandingPage from './Commponts/LandingPage'
import Navbar from './Commponts/Navbar'
import Foter from './Commponts/Foter'

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dashbord from './Commponts/Dashbord'

function App() {
   
  // language web ar - tjwel en comp...
    const { i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('lang', i18n.language);
  }, [i18n.language]);
 // language web ar - tjwel en comp...
  return (
   
   <>
    <Container maxWidth="lg">
      <Navbar/>
    <Routes>
      <Route path='/' element = {<LandingPage/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/regester' element = {<Regester/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/home' element = {<Home/>} />
      <Route path='/gallery' element = {<Gallery/>} />
      <Route path='/team' element = {<Team/>} />
      <Route path='/daycare' element = {<Daycare/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/dashbord' element = {<Dashbord/>} />

          {/*  <Route 
     path='/home'
      element={
     <ProtectedRout>
        <Home/>
      </ProtectedRout>
     }
      />  */}

    
    </Routes>
    </Container>
    <Foter/>
   </>
  )
}

export default App




