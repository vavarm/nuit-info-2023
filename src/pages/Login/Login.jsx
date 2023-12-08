import { useRef, useEffect } from 'react'
import style from './css/style.module.css'

const Login = () => {
  const ref = useRef(null)

  useEffect(() => {
    // Randomly select a CSS file
    const cssFiles = ['cute', 'horror']
    const randomCssFile = cssFiles[Math.floor(Math.random() * cssFiles.length)]

    // Dynamically import the CSS file
    // import(`./css/${randomCssFile}.css`)
    //     .then(() => {
    //         console.log(`Dynamically loaded ${randomCssFile}.css`);
    //     })
    //     .catch(err => console.error('Error loading CSS file:', err));

    if (ref.current) {
      // ref.current.innerHTML = '<p>Hahahahha</p>';
    }
  }, [])

  return (
    <div className={style.root} ref={ref}>
      <div className={style.formsContainer}>
        <div className={style.loginContainer}>
          <h1>Login</h1>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <div className={style.formGroup}>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
        <div className={style.loginContainer}>
          <h1>Register</h1>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <button type='submit'>Register</button>
            <div className={style.formGroup}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateYear'>Birthdate Year</label>
              <input type='number' id='birthdateYear' name='birthdateYear' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateMonth'>Birthdate Month</label>
              <input type='number' id='birthdateMonth' name='birthdateMonth' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateDay'>Birthdate Day</label>
              <input type='number' id='birthdateDay' name='birthdateDay' />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateWeekDay'>Birthdate Week Day</label>
              <select
                id='birthdateWeekDay'
                name='birthdateWeekDay'
                onKeyDown={(e) => e.preventDefault()}
                value='0'
              >
                <option value='1'>Monday</option>
                <option value='0'>Sunday</option>
                <option value='5'>Friday</option>
                <option value='2'>Tuesday</option>
                <option value='4'>Thursday</option>
                <option value='6'>Saturday</option>
                <option value='3'>Wednesday</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className={style.cookieContainer}>
        <p className={style.cookieText}>
          Nous utilisons des cookies et des technologies similaires,
          indispensables au bon fonctionnement de notre site web. Vous êtes
          certainement conscient de leur importance, n&apos;est-ce pas ? Ces
          petits outils numériques nous permettent de vous offrir une expérience
          personnalisée, quelque chose que tout le monde souhaite de nos jours.
          En continuant à utiliser notre site, vous montrez que vous comprenez
          et soutenez notre mission, une mission qui ne vise qu&apos;à vous
          apporter le meilleur. Mais attendez, il y a plus. Nous utilisons
          également des cookies supplémentaires pour analyser l&apos;utilisation
          du site. Vous pourriez penser que c&apos;est excessif, mais imaginez
          un monde où chaque clic que vous faites nous aide à créer un espace
          numérique plus adapté à vos besoins. Chaque fois que vous acceptez ces
          cookies, vous ne faites pas que nous aider, vous contribuez à une
          communauté plus grande qui bénéficie de vos choix. En continuant à
          utiliser notre site, vous ne faites pas que consentir à notre
          utilisation des cookies – vous faites partie d&apos;une élite qui
          comprend l&apos;importance de l&apos;innovation et de la
          personnalisation. Votre soutien nous est inestimable et, sans vous,
          nous ne pourrions pas continuer à progresser. Pour plus
          d&apos;informations, et pour comprendre à quel point votre rôle est
          crucial dans cette aventure, veuillez lire notre Politique de
          confidentialité. Souvenez-vous, chaque clic compte, et le vôtre compte
          double. Merci d&apos;être un pilier de notre communauté numérique.{' '}
        </p>
        <div className={style.agree}>
          <button>Ça me va !</button>
        </div>
      </div>
    </div>
  )
}

export default Login
