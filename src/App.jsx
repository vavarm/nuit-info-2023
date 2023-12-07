import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import HomePage from './pages/HomePage.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
