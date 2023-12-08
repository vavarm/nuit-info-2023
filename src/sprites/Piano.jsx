import { Sprite, Container, Text } from '@pixi/react'
import { Ticker } from 'pixi.js'
import { useState, useEffect } from 'react'

const melonImage = new URL(
  '../../public/sprite-image/melon.png',
  import.meta.url
).href

const orangeImage = new URL(
  '../../public/sprite-image/orange.png',
  import.meta.url
).href

const peachImage = new URL(
  '../../public/sprite-image/peach.png',
  import.meta.url
).href

const pearImage = new URL(
  '../../public/sprite-image/pear.png',
  import.meta.url
).href

const imageOptions = [melonImage, orangeImage, peachImage, pearImage]

const letters = 'UHJK';

function Piano() {
  const [positionX, setPositionX] = useState(window.innerWidth / 2);
  const [positionY, setPositionY] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    imageOptions[Math.floor(Math.random() * imageOptions.length)]
  );
  const [randomLetter, setRandomLetter] = useState(getRandomLetter());

  useEffect(() => {
    const ticker = new Ticker();
    ticker.add((delta) => {
      setPositionY((prevPositionY) => prevPositionY + 6 * delta);
    });
    ticker.start();

    return () => {
      ticker.stop();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPositionX(window.innerWidth / 2);
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

export default Piano