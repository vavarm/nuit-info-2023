import { Stage } from '@pixi/react'
import Guitare from './sprites/Guitare.jsx'
import Piano from './sprites/Piano.jsx'
import Tambour from './sprites/Tambour.jsx'

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
