import { } from "antd"
import './App.css'
import AppHeader from "./Component/Header"
import AppFotter from "./Component/Footer"
import PageContent from "./Component/PageContent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ImageCategory from "./Component/ImageCategory"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <div className='App'>
        <AppHeader />
        <PageContent />
        <AppFotter />
      </div> */}
    </Routes>
    </BrowserRouter>
    <ImageCategory />
    </>
  )
}

export default App
