import { Sprite } from '@pixi/react'
import { Ticker } from 'pixi.js'
import { useState, useEffect } from 'react'

const appleImage = new URL(
  '../../public/sprite-image/apple.png',
  import.meta.url
).href

const cherriesImage = new URL(
  '../../public/sprite-image/cherries.png',
  import.meta.url
).href

const dekoponImage = new URL(
  '../../public/sprite-image/dekopon.png',
  import.meta.url
).href

const grapes = new URL(
  '../../public/sprite-image/grapes.png',
  import.meta.url
).href

const imageOptions = [appleImage, cherriesImage, dekoponImage, grapes]

function Guitare() {

  const [positionX, setPositionX] = useState(window.innerWidth / 2)
  const [positionY, setPositionY] = useState(0)

  // Randomly select an initial image from the options
  const [currentImage, setCurrentImage] = useState(
    imageOptions[Math.floor(Math.random() * imageOptions.length)]
  );

  useEffect(() => {
    const ticker = new Ticker()
    ticker.add((delta) => {
      // Update the Y position to make the sprite fall
      setPositionY((prevPositionY) => prevPositionY + 5 * delta)
    })
    ticker.start()

    return () => {
      ticker.stop()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setPositionX(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // after falling down and disappearing from the screen, set the currentImage by taking a randomized image from the imageOptions array
  if (positionY > innerHeight) {
    const randomImageIndex = Math.floor(Math.random() * imageOptions.length);
    setCurrentImage(imageOptions[randomImageIndex]);
    setPositionY(0);
  }

  return (
    <Sprite
      anchor={{ x: 0.5, y: 0.5 }}
      position={[positionX, positionY]}
      image={currentImage}
    />
  )
}

export default Guitare