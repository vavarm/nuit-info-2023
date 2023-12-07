import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import Stagex from './stage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/stagetest' element={<Stagex />} />
        <Route path='/' element={<Login />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </>
  )
}

export default App
