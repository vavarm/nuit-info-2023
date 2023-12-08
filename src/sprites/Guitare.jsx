import { Sprite, Container, Text } from '@pixi/react'
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

const letters = 'ZQSD';

function Guitare() {
  const [positionX, setPositionX] = useState(window.innerWidth / 4);
  const [positionY, setPositionY] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    imageOptions[Math.floor(Math.random() * imageOptions.length)]
  );
  const [randomLetter, setRandomLetter] = useState(getRandomLetter());

  useEffect(() => {
    const ticker = new Ticker();
    ticker.add((delta) => {
      setPositionY((prevPositionY) => prevPositionY + 8 * delta);
    });
    ticker.start();

    return () => {
      ticker.stop();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPositionX(window.innerWidth / 4);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (positionY > window.innerHeight) {
    const randomImageIndex = Math.floor(Math.random() * imageOptions.length);
    setCurrentImage(imageOptions[randomImageIndex]);
    setRandomLetter(getRandomLetter());
    setPositionY(0);
  }

  function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
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
        text={randomLetter}
        style={{
          fontSize: 40,
          fill: 'white',
          align: 'center',
        }}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </Container>
  );
}

export default Guitare