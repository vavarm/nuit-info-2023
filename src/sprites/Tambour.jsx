import { Sprite, Container, Text } from '@pixi/react'
import { Ticker } from 'pixi.js'
import { useState, useEffect } from 'react'

const pineappleImage = new URL(
  '../../public/sprite-image/pineapple.png',
  import.meta.url
).href

const strawberryImage = new URL(
  '../../public/sprite-image/strawberry.png',
  import.meta.url
).href

const watermelonImage = new URL(
  '../../public/sprite-image/watermelon.png',
  import.meta.url
).href

const bombImage = new URL(
  '../../public/sprite-image/bomb.png',
  import.meta.url
).href

const imageOptions = [pineappleImage, strawberryImage, watermelonImage, bombImage]

const arrowSymbols = ['↑', '←', '↓', '→']; // List of arrow symbols

function Tambour() {
  const [positionX, setPositionX] = useState(window.innerWidth / 1.2);
  const [positionY, setPositionY] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    imageOptions[Math.floor(Math.random() * imageOptions.length)]
  );
  const [randomArrow, setRandomArrow] = useState(getRandomArrow());

  useEffect(() => {
    const ticker = new Ticker();
    ticker.add((delta) => {
      setPositionY((prevPositionY) => prevPositionY + 4 * delta);
    });
    ticker.start();

    return () => {
      ticker.stop();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPositionX(window.innerWidth / 1.2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (positionY > window.innerHeight) {
    const randomImageIndex = Math.floor(Math.random() * imageOptions.length);
    setCurrentImage(imageOptions[randomImageIndex]);
    setRandomArrow(getRandomArrow());
    setPositionY(0);
  }

  function getRandomArrow() {
    return arrowSymbols[Math.floor(Math.random() * arrowSymbols.length)];
  }

  return (
    <Container position={[positionX, positionY]}>
      <Sprite
        anchor={{ x: 0.5, y: 0.5 }}
        image={currentImage}
        width={75} // Set the width of the image
        height={75} // Set the height of the image
      />
      <Text
        text={randomArrow}
        style={{
          fontSize: 40,
          fill: 'white',
          align: 'center',
          fontWeight: 'bold',
        }}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </Container>
  );
}

export default Tambour;