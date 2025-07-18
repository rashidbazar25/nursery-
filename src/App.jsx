
import './App.css'
import { Route ,Routes } from 'react-router-dom'
import Login from './Commponts/Login'
import Regester from './Commponts/Regester'
import ProtectedRout from './Commponts/ProtectedRout'
import Home from './Commponts/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element = {<Login/>} />
      <Route path='/regester' element = {<Regester/>} />

      <Route 
      path='/home'
      element={
      <ProtectedRout>
        <Home/>
      </ProtectedRout>
      }
      />
    </Routes>
    </>
  )
}

export default App
