import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './Pages/adminPage'
import HomePage from './Pages/homePage'
import LoginPage from './Pages/loginPage'
import ProductCard from './components/productCard'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='w-full h-[100vh]'>
          <Routes path='/'>
            <Route path='/*' element={<HomePage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/products' element={<h1>Products Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
