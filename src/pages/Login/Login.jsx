import { useRef, useEffect } from 'react';
import style from './css/style.module.css';

const Login = () => {
    const ref = useRef(null);

    useEffect(() => {

        // Randomly select a CSS file
        //const cssFiles = ['cute', 'horror'];
        //const randomCssFile = cssFiles[Math.floor(Math.random() * cssFiles.length)];

        // Dynamically import the CSS file
        // import(`./css/${randomCssFile}.css`)
        //     .then(() => {
        //         console.log(`Dynamically loaded ${randomCssFile}.css`);
        //     })
        //     .catch(err => console.error('Error loading CSS file:', err));

        //if (ref.current) {
            // ref.current.innerHTML = '<p>Hahahahha</p>';
        //}


        
    }, []);

    return (
        <div className={style.root} ref={ref}>
            <div className={style.loginContainer}>
                <h1>Login</h1>
                <form action="#" method="post">
                    <div className={style.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className={style.cookieContainer}>
                <p className={style.cookieText}>
                    Voulez-vous authoriser les notification?                </p>
                <div className={style.agree}>
                    <button className={style.buttonContainer}>Ça me va !</button>
                    <button className={style.buttonContainer}>Non jamais !</button>
                </div>
            </div>

        </div>
    );
};

export default Login;

