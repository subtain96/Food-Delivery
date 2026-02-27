import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PlaceOrder/Order'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'

const App = () => {
  return (
    <>
    <div className='app'>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
     <AppDownload />
    <Footer/>
   
    </>
  )
}

export default App
