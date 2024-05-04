import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Login from './Pages/Login'
import UserRegister from './Pages/UserRegister'
import AddToCart from './components/AddToCart'
import PaymentForm from './Pages/PaymentForm'
// import AddToCart from './Pages/AddToCart'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/menu' element = {<MainMenu/>} />
     <Route path='/about' element = {<AboutUs/>} />
     <Route path='/contact' element = {<ContactUs/>} />
     <Route path='/login' element = {<Login/>} />
     <Route path='/register' element = {<UserRegister/>} />
     <Route path='/atc' element = {<AddToCart/>} />
     <Route path='/chck' element = {<PaymentForm/>} />

     
     </Routes>
      
      
      
    </BrowserRouter>
  )
}

export default App