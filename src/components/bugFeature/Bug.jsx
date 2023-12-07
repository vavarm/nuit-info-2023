import { useEffect, useState } from 'react'
import Chart from './Chart2'

function Bug() {
    
    // UseState
    const [bug, setBug] = useState("Bug")
    const [bugReady, setBugReady] = useState(false)
    const [iteration, setIteration] = useState(0)

    // UseEffect
    useEffect(() => {
        if (bugReady && iteration < 25) {
            const interval = setTimeout(() => {
                setBug(bug + "g")
                setIteration(iteration + 1)
            }, 10)
            // Nettoyage de l'intervalle lorsque le composant est démonté ou bugReady change
            return () => clearInterval(interval)
        }
    }, [bug, bugReady, iteration])   

    return (
        <div>
            <button onClick={() => setBugReady(bugReady => !bugReady)}>Ready</button>
            <h1>{bug}</h1>
            <Chart />
        </div>
    )
}

export default Bug