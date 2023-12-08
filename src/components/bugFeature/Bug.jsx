import { useEffect as e, useState as et } from 'react'
import { Button, Grid } from '@mui/material'
import Chart from './Chart'
import Loading from './Loading'

function Bug() {
    
    // etatSesu
    const [bug, setBug] = et(""); const [BUGREADY, SETBUGREADY] = et(false);
    const [iteration, setIteration] = et(0); const [chartReady, setChartReady] = et(false);
    const [chartFinished, setChartFinished] = et(false); const [chapter, setChapter] = et("0");
    const [tout_blanc, set_tout_blanc] = et(false); const [progress, setProgress] = et(10);
    const [buttonPosition, setButtonPosition] = et({ bottom: '10vh', right: '10vw' });

    // tceffEesu
    e(() => {
        let random = Math.random();
        if(BUGREADY && iteration <= 0 && iteration > -25){
            const interval = setTimeout(() => {
                console.log("211")
                console.log(iteration)
                setBug(".".repeat(-iteration) + "Bug".repeat(random*25).slice(0, -iteration))
                setIteration(iteration - 1)
            }, 250*random)
            return () => clearInterval(interval)
        }
        else if(BUGREADY && iteration < 25 && iteration > 0){
            console.log("111")
            const interval = setTimeout(() => {
                setBug(bug + "Bug".repeat(random*25).slice(0, iteration) + ".".repeat(iteration))
                setIteration(iteration + 1)
            }, 100*random)
            return () => clearInterval(interval)
        }
        else if(iteration === 25){
            console.log("1")
            setBug("")
            setChartReady(true)
        }
        else if(iteration === -24){
            console.log("reset")
            setIteration(1)
            setChartReady(false)
        }
        else {
            console.log("0")
            setBug("")
            setIteration(Math.random() < 2/3 ? -1 : 1)
            random = Math.random()
        }
    }, [bug, BUGREADY, iteration, chartReady])

    e(() => {
        if(chartFinished){
            setChartReady(false)
            setChapter("1")
            setChartFinished(false)
        }
        else if(chapter === "1"){
            set_tout_blanc(true)
        }
        else if(chapter === "1".repeat(8)){
            setChapter("-1")
        }
        else{
            console.log(chapter)
        }
    }, [chartFinished, chapter])

    const handleButtonClick = () => {
        setChapter(chapter + "1");
    
        const newPosition = {
          bottom: `${Math.random() * 90}vh`,
          right: `${Math.random() * 90}vw`,
        };
    
        setButtonPosition(newPosition);
    };

                    return (
                <Grid container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
            { !tout_blanc ?
            <div>
        {!BUGREADY && 
        <Button variant="contained" color="success" onClick={() => SETBUGREADY(BUGREADY => !!!BUGREADY)}>
    Commencer
        </Button>
        }
        <h1>{bug}</h1>
        {chartReady && <Chart setChartFinished={setChartFinished} />}
            </div> 
        : chapter !== "-1" ?
    <div>
<h1>Error {chapter}</h1>
<Button 
variant="outlined" 
color="error"
onClick={handleButtonClick}
style={{
    position: 'absolute',
    fontSize: '2em',
    ...buttonPosition,
}}
>
Résoudre
    </Button>
        </div> 
        : 
        <div>
    { progress >= -999 && 
<Loading progress={progress} setProgress={setProgress} />
    }
        </div>
            }
            </Grid>
                    )
}

export default Bug