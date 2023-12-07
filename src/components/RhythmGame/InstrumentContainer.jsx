import React from 'react';
import { Container, Sprite } from '@pixi/react';
import * as PIXI from 'pixi.js';
import HUD_URL from '../../assets/HUD.png';

const backgroundColorImages = [
  new URL('../../../public/red.png', import.meta.url).href,
  new URL('../../../public/green.png', import.meta.url).href,
  new URL('../../../public/blue.png', import.meta.url).href,
];

function InstrumentContainer({ instrument, stageSize, nbInstruments, index }) {



  return (
    <Container
      x={(stageSize.width / nbInstruments) * index}
      y={0}
      width={stageSize.width / nbInstruments}
      height={stageSize.height}
    >
      {
        <Sprite
          image={backgroundColorImages[index]}
          width={stageSize.width / nbInstruments}
          height={stageSize.height}
          alpha={0.2}
        />
      }
      <Container
      >
        <Sprite

          image={HUD_URL}
          width={stageSize.width / nbInstruments}
          height={stageSize.height / nbInstruments}
        />
      </Container>
    </Container>
  );
}

export default InstrumentContainer;
