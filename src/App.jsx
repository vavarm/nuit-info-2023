import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import HomePage from './pages/HomePage.jsx'
import Bug from './components/bugFeature/Bug.jsx'
import Stagex from './stage.jsx'
import Quizz from './pages/quizz/Quizz.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bug' element={<Bug />} />
        <Route path='/game' element={<Stagex />} />
        <Route path='/quizz' element={<Quizz />} />
      </Routes>
    </>
  )
}

export default App
