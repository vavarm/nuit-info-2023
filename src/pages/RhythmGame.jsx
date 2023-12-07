import { Checkbox, Dialog, useMediaQuery } from '@mui/material'
import { useEffect, useState, useRef } from 'react'
import { Sprite, Stage } from '@pixi/react'
import InstrumentContainer from '../components/RhythmGame/InstrumentContainer'

const instrumentsList = ['piano', 'drums', 'guitar']

const backgroundImage = new URL('../../public/background.png', import.meta.url)
  .href

function RhythmGame() {
  const [openDialog, setOpenDialog] = useState(true)

  const [instruments, setInstruments] = useState([false, false, false])

  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  // check if mobile
  const isMobile = useMediaQuery('(max-width:600px)')

  const handleCloseDialog = (event, reason) => {
    // don't close on backdrop click or escape key
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return
    // at least one instrument should be selected
    if (instruments.every((instrument) => instrument === false)) return
    // close dialog
    setOpenDialog(false)
    // start game
    startGame()
  }

  const changeInstrument = (instrument) => {
    setInstruments((prevInstruments) => {
      const newInstruments = [...prevInstruments]
      newInstruments[instrument] = !newInstruments[instrument]
      return newInstruments
    })
  }

  const indexOfSelectedInstruments = () => {
    let selectedInstruments = []
    instruments.forEach((instrument, index) => {
      if (instrument) selectedInstruments.push(index)
    })
    return selectedInstruments
  }

  const numberOfSelectedInstruments = () => {
    let selectedInstruments = 0
    instruments.forEach((instrument) => {
      if (instrument) selectedInstruments++
    })
    return selectedInstruments
  }

  const startGame = () => {
    // start game
    console.log('start game')
  }

  useEffect(() => {
    const handleResize = () => {
      setStageSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  // modal with full screen on mobile
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullScreen={isMobile}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <h1>Choose your instruments</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              width: '100%',
              justifyContent: 'space-evenly',
            }}
          >
            <div id='pianoSelector' className='instrument'>
              <Checkbox
                checked={instruments[0]}
                onChange={() => changeInstrument(0)}
              >
                Piano
              </Checkbox>
            </div>
            <div id='drumsSelector' className='instrument'>
              <Checkbox
                checked={instruments[1]}
                onChange={() => changeInstrument(1)}
              >
                Drums
              </Checkbox>
            </div>
            <div id='guitarSelector' className='instrument'>
              <Checkbox
                checked={instruments[2]}
                onChange={() => changeInstrument(2)}
              >
                Guitar
              </Checkbox>
            </div>
          </div>
          <button onClick={() => handleCloseDialog()}>Start Game</button>
        </div>
      </Dialog>

      <Stage
        width={stageSize.width}
        height={stageSize.height}
        id='rhythmGameStage'
      >
        <Sprite
          image={backgroundImage}
          width={stageSize.width}
          height={stageSize.height}
        />
        {instruments[0] && (
          <InstrumentContainer
            instrument='piano'
            stageSize={stageSize}
            nbInstruments={numberOfSelectedInstruments()}
            index={indexOfSelectedInstruments().indexOf(0)}
          />
        )}
        {instruments[1] && (
          <InstrumentContainer
            instrument='drums'
            stageSize={stageSize}
            nbInstruments={numberOfSelectedInstruments()}
            index={indexOfSelectedInstruments().indexOf(1)}
          />
        )}
        {instruments[2] && (
          <InstrumentContainer
            instrument='guitar'
            stageSize={stageSize}
            nbInstruments={numberOfSelectedInstruments()}
            index={indexOfSelectedInstruments().indexOf(2)}
          />
        )}
      </Stage>
    </>
  )
}

export default RhythmGame
