import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Articles from './pages/Articles.jsx'
import { Stage } from '@pixi/react'
import Guitare from './sprites/Guitare.jsx'
import Piano from './sprites/Piano.jsx'
import Tambour from './sprites/Tambour.jsx'
import { useState, useEffect } from 'react'

function Stagex() {
  return (
    <>
      <Stage
      width={window.innerWidth + 200}
      height={window.innerHeight - 50}
      raf={false}
      renderOnComponentChange={true}
      options={{ antialias: true, backgroundAlpha: 0 }}
    >
      <Guitare />
      <Piano />
      <Tambour />
    </Stage>
    </>
  )
}

export default Stagex
