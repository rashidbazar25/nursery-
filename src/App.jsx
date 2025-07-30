
import './App.css'
import { Route ,Routes } from 'react-router-dom'
import Login from './Commponts/Login'
import Regester from './Commponts/Regester'
import ProtectedRout from './Commponts/ProtectedRout'
import Home from './Commponts/Home'
import About from './Commponts/About'
import Approach from './Commponts/Approach'
import Contact from './Commponts/Contact'
import Extracourses from './Commponts/Extracourses'
import Daycare from './Commponts/Daycare'
import Team from './Commponts/Team'
import { Container } from '@mui/material'
import LandingPage from './Commponts/LandingPage'


function App() {

  return (
   
    <Container maxWidth="lg">
     <LandingPage/>
    <Routes>
      <Route path='/login' element = {<Login/>} />
      <Route path='/regester' element = {<Regester/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/approach' element = {<Approach/>} />
      <Route path='/extracourses' element = {<Extracourses/>} />
      <Route path='/team' element = {<Team/>} />
      <Route path='/daycare' element = {<Daycare/>} />
      <Route path='/contact' element = {<Contact/>} />

      <Route 
      path='/home'
      element={
     // <ProtectedRout>
        <Home/>
    //  </ProtectedRout>
      }
      />
    </Routes>
    </Container>
  )
}

export default App




