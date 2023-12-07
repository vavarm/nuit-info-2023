import { useRef, useEffect } from 'react'

import './css/style.css' 
import myFunction from './js/myScript.js' 

const Login = () => {
    const ref = useRef(null)

    useEffect(() => {
        myFunction() // Exécuter votre fonction JS vanilla

        // Exemple d'interaction avec le DOM
        if (ref.current) {
            ref.current.innerHTML = '<p>Ceci est du contenu HTML inséré</p>'
        }
    }, [])

    return (
        <div ref={ref}>
            {/* Votre contenu JSX ici */}
        </div>
    )
}

export default Login
