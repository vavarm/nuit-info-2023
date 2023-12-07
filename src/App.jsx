import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import RythmGame from './pages/RythmGame.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/rythm-game' element={<RythmGame />} />
      </Routes>
    </>
  )
}

export default App
