import React, { useState } from 'react'
import './components/Navbar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>

      {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}

      <div class='w-4/5 m-auto'>
      <Navbar setShowLogin = {setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      
    </div>
    <Footer> </Footer>
    </>
    
  )
}

export default App