import { Container, Sprite } from '@pixi/react'

const backgroundColorImages = [
  new URL('../../../public/red.png', import.meta.url).href,
  new URL('../../../public/green.png', import.meta.url).href,
  new URL('../../../public/blue.png', import.meta.url).href,
]

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
    </Container>
  )
}

export default InstrumentContainer
