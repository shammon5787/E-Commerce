import { } from "antd"
import './App.css'
import AppHeader from "./Component/Header"
import AppFotter from "./Component/Footer"
import PageContent from "./Component/PageContent"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppHeader />
        <PageContent />
        <AppFotter />
      </div>
    </BrowserRouter>
  )
}

export default App
