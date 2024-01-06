import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from '../../Pages/Categories'
import Home from '../../Pages/Home'

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:categoryID' element={<Categories/>}/>
      </Routes>
    </div>
  )
}

export default AppRoute
