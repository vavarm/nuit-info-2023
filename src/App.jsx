import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import RhythmGame from './pages/RhythmGame.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/rhythm-game' element={<RhythmGame />} />
      </Routes>
    </>
  )
}

export default App
