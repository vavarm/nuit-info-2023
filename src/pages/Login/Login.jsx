import { useRef, useEffect } from 'react';
import style from './css/style.module.css';

const Login = () => {
    const ref = useRef(null);

    useEffect(() => {

        // Randomly select a CSS file
        const cssFiles = ['cute', 'horror'];
        const randomCssFile = cssFiles[Math.floor(Math.random() * cssFiles.length)];

        // Dynamically import the CSS file
        // import(`./css/${randomCssFile}.css`)
        //     .then(() => {
        //         console.log(`Dynamically loaded ${randomCssFile}.css`);
        //     })
        //     .catch(err => console.error('Error loading CSS file:', err));

        if (ref.current) {
            // ref.current.innerHTML = '<p>Hahahahha</p>';
        }
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
                    Nous utilisons des cookies et des technologies similaires, indispensables au bon fonctionnement de notre site web. Vous êtes certainement conscient de leur importance, n&apos;est-ce pas ? Ces petits outils numériques nous permettent de vous offrir une expérience personnalisée, quelque chose que tout le monde souhaite de nos jours. En continuant à utiliser notre site, vous montrez que vous comprenez et soutenez notre mission, une mission qui ne vise qu&apos;à vous apporter le meilleur.

                    Mais attendez, il y a plus. Nous utilisons également des cookies supplémentaires pour analyser l&apos;utilisation du site. Vous pourriez penser que c&apos;est excessif, mais imaginez un monde où chaque clic que vous faites nous aide à créer un espace numérique plus adapté à vos besoins. Chaque fois que vous acceptez ces cookies, vous ne faites pas que nous aider, vous contribuez à une communauté plus grande qui bénéficie de vos choix.

                    En continuant à utiliser notre site, vous ne faites pas que consentir à notre utilisation des cookies – vous faites partie d&apos;une élite qui comprend l&apos;importance de l&apos;innovation et de la personnalisation. Votre soutien nous est inestimable et, sans vous, nous ne pourrions pas continuer à progresser. Pour plus d&apos;informations, et pour comprendre à quel point votre rôle est crucial dans cette aventure, veuillez lire notre Politique de confidentialité. Souvenez-vous, chaque clic compte, et le vôtre compte double. Merci d&apos;être un pilier de notre communauté numérique.                </p>
                <div className={style.agree}>
                    <button>Ça me va !</button>
                </div>
            </div>

        </div>
    );
};

export default Login;

