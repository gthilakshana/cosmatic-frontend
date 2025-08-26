import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import AdminPage from './Pages/adminPage'
import HomePage from './Pages/homePage'


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full h-[100vh]">
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/admin/*" element={<AdminPage />} />


          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
