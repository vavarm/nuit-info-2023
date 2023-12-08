import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import HomePage from './pages/HomePage.jsx'
import Bug from './components/bugFeature/Bug.jsx' /*Temporary*/

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bug' element={<Bug />} /> {/*Temporary*/}
      </Routes>
    </>
  )
}

export default App
