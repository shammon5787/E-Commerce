import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from '../../Pages/Categories'
import Home from '../../Pages/Home'
import Products from '../Products'
import MenProd from '../../Pages/Categories/MenProd'

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:categoryID' element={<Categories/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/main-shirt' element={<MenProd/>}/>
      </Routes>
    </div>
  )
}

export default AppRoute
