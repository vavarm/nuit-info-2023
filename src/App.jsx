import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import Bug from './components/bugFeature/Bug.jsx' /*Temporary*/
import Chart from './components/bugFeature/Chart2.jsx' /*Temporary*/

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/bug' element={<Bug />} /> {/*Temporary*/}
        <Route path='/chart' element={<Chart />} /> {/*Temporary*/}
      </Routes>
    </>
  )
}

export default App
