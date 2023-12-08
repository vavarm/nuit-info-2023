import { useRef, useEffect, useState } from 'react'
import style from './css/style.module.css'
import PopUp from '../../components/Popup/Popup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audiofile from '../../assets/johncena.mp3'
import ReactAudioPlayer from 'react-audio-player';
import useSound from 'use-sound';
import buttonHoverSound from '../../assets/johncena.mp3';
import zhongxina from '../../assets/zhongxinna.jpg';

const Login = () => {
  const ref = useRef(null)

  const soundUrl = buttonHoverSound;
  const [play] = useSound(soundUrl);

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isCookieContainerVisible, setCookieContainerVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);


  const notifications = ["Still there?", "Are you sleeping?", "Are you still trying to log in?", "Am i annoying?", "I'm sorry :(", "XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", "I'm gonna stop now", "Bye", "I'm", "really", "goiii kokoko", "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to be a baker because I kneaded dough.",
  "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field!",
  "I only know 25 letters of the alphabet. I don't know y.",
  "I used to be a banker, but I lost interest.",
  "When the code finally works on the first try: Is this real life?",
  "When someone asks if you've had enough coffee: There is no such thing as 'enough coffee.'",
  "That moment when you find a bug at 3 AM: Why do you haunt me, code gremlin?",
  "When you see someone reading the documentation: A wild unicorn appears!",
  "When your friend says they don't use version control: Are you living in the dark ages?",
  "When you fix a bug without knowing how you did it: Wizardry level 1000.",
  "When the client wants changes after finalizing the project: Welcome to the never-ending story.",
  "Trying to understand someone else's code: It's like deciphering ancient hieroglyphs.",
  "When your code works on the first try, but you don't trust it: Suspicious success.",
  "That face when you realize it's Friday: The weekend is loading..."]

  const onInputClick = () => {
    setRotationAngle((prevAngle) => (prevAngle + 90) % 360);
    play()
    // display image zhongxina as a popup
    const img = document.createElement("img");
    img.src = zhongxina;
    img.style.width = '1000px';
    img.style.height = '1000px';
    img.style.position = 'absolute';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.zIndex = '9999';
    img.style.transition = 'transform 0.5s ease';
    document.body.appendChild(img);
    img.getBoundingClientRect();
  // Apply the rotation
  img.style.transform = 'translate(-50%, -50%) rotate(' + (rotationAngle + 360) + 'deg)'
    setTimeout(() => {
      document.body.removeChild(img);
    }, 1000);
  }

  const inputStyle = {
    transform: `rotate(${rotationAngle}deg)`, // Apply the rotation
    transition: 'transform 0.5s ease',
  }

  const createNotif = () => {
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    toast.success(randomNotification);
  }

  const acceptNotif = () => {
    console.log('Accept notif')
    setCookieContainerVisible(false);
    // Schedule the creation of notifications every 5 seconds
    const notificationInterval = setInterval(() => {
        createNotif();
        play()
      }, 2000);
  
      // Clear the interval after a specific time (e.g., 60 seconds)
      setTimeout(() => {
        clearInterval(notificationInterval);
      }, 10000);
  }

  const handleOpenPopUp = () => {
    setPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);

  const handleHover = () => {
    setIsHovered(true)
    console.log('Hovered')
    const maxX = window.innerWidth-500; // Adjust the value based on your button's width
    const maxY = window.innerHeight; // Adjust the value based on your button's height
    const randomXValue = Math.floor(Math.random() * maxX);
    const randomYValue = Math.floor(Math.random() * maxY);
    setRandomX(randomXValue)
    setRandomY(randomYValue)
    setIsPlaying(true);
    play()
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    position: 'absolute',
    left: `${isHovered ? randomX : 0}px`,
    top: `${isHovered ? randomY : 0}px`,
    transition: 'left 0.3s ease, top 0.3s ease', // Add transitions for smooth movement
  };

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
    <div className={style.root} ref={ref} style={inputStyle} >
      <div className={style.formsContainer}>
        <div className={style.loginContainer}>
          <h1>تسجيل الدخول إلى الموقع</h1>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <div className={style.formGroup}>
              <label htmlFor='username'>Mario</label>
              <input type='text' id='username' name='username' onClick={onInputClick}  />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='password'>peachIsMyWaifu</label>
              <input type='password' id='password' name='password' onClick={onInputClick}/>
            </div>
            <button type='submit'>ログイン</button>
          </form>
        </div>
        <div className={style.loginContainer}>
          <h1>注册到网站</h1>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <button type='submit'>Register</button>
            <div className={style.formGroup}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateYear'>Birthdate Year</label>
              <input type='number' id='birthdateYear' name='birthdateYear' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateMonth'>Birthdate Month</label>
              <input type='number' id='birthdateMonth' name='birthdateMonth' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateDay'>Birthdate Day</label>
              <input type='number' id='birthdateDay' name='birthdateDay' onClick={onInputClick}/>
            </div>
            <div className={style.formGroup}>
              <label htmlFor='birthdateWeekDay'>Birthdate Week Day</label>
              <select
                id='birthdateWeekDay'
                name='birthdateWeekDay'
                onKeyDown={(e) => e.preventDefault()}
                value='0'
                onClick={onInputClick}
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

      {isCookieContainerVisible && (
        <div className={style.cookieContainer}>
          <p className={style.cookieText}>Voulez-vous authoriser les notification?</p>
          <div className={style.agree}>
            <button className={style.buttonContainer} onClick={acceptNotif}>
              Ça me va !
            </button>
            <button
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenPopUp}
              style={buttonStyle}
              name="unclickableButton"
              className={style.movingButton}
            >
              Non jamais !
            </button>
            {isPopUpVisible && <PopUp onClose={handleClosePopUp} />}
            <ReactAudioPlayer src={audiofile} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
