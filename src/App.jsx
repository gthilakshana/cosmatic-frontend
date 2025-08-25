import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './Pages/adminPage'
import HomePage from './Pages/homePage'
import LoginPage from './Pages/loginPage'
import SignupPage from './Pages/signupPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full h-[100vh]">
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
