import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import Quizz from './pages/quizz/Quizz.jsx'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/quizz' element={<Quizz />} />
        </Routes>
    </>
  )
}

export default App
