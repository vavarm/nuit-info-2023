import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import { Stage } from '@pixi/react'
import Guitare from './sprites/Guitare.jsx'
import { useState, useEffect } from 'react'

function Stagex() {
  return (
    <>
      <Stage
      width={1000}
      height={window.innerHeight - 100}
      raf={false}
      renderOnComponentChange={true}
      options={{ antialias: true, backgroundAlpha: 0 }}
    >
      <Guitare />
    </Stage>
    </>
  )
}

export default Stagex
