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
                    Voulez-vous authoriser les notification?                </p>
                <div className={style.agree}>
                    <button className={style.buttonContainer}>Ça me va !</button>
                    <button className={style.buttonContainer}>Non jamais !</button>
                </div>
      </div>
    </div>
  )
}

export default Login
