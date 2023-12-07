import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import HomePage from './pages/HomePage.jsx'
import Bug from './components/bugFeature/Bug.jsx' /*Temporary*/
import Chart from './components/bugFeature/Chart2.jsx' /*Temporary*/

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bug' element={<Bug />} /> {/*Temporary*/}
        <Route path='/chart' element={<Chart />} /> {/*Temporary*/}
      </Routes>
    </>
  )
}

export default App
