import React from 'react';
import HdrAutoOutlinedIcon from '@mui/icons-material/HdrAutoOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';

function Footer() {

  // useState
  const [konami, setKonami] = React.useState(0);

  let konamiCounter = 0;

  const handleKeyDown = (event) => {
    console.log(event.key, " ", konami, " ", konamiCounter);
    if (event.key === 'ArrowUp' && (konamiCounter === 0 || konamiCounter === 1)) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else if (event.key === 'ArrowDown' && (konamiCounter === 2 || konamiCounter === 3)) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else if (event.key === 'ArrowLeft' && (konamiCounter === 4 || konamiCounter === 6)) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else if (event.key === 'ArrowRight' && (konamiCounter === 5 || konamiCounter === 7)) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else if (event.key === 'b' && konamiCounter === 8) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else if (event.key === 'a' && konamiCounter === 9) {
      setKonami((prevKonami) => prevKonami + 1);
      konamiCounter++;
    }
    else {
      setKonami(0);
      konamiCounter = 0;
    }
}

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  // useEffect
  React.useEffect(() => {
    console.log(konami);
    if(konami >= 10) {
      const video = document.createElement('video');
      video.src = '/troll.mp4';
      video.autoplay = true;
      video.loop = true;
      video.style.position = 'absolute';
      video.style.top = '0';
      video.style.left = '0';
      video.style.zIndex = '100';
      video.style.width = '100%';
      video.style.height = '100%';
      document.body.appendChild(video);
      setTimeout(() => {
        video.remove();
        setKonami(0);
        konamiCounter = 0;
      }, 5000);
    }
  }, [konami]);

  const konamiIcons = [
    <ArrowCircleUpOutlinedIcon />,
    <ArrowCircleUpOutlinedIcon />,
    <ArrowCircleDownOutlinedIcon />,
    <ArrowCircleDownOutlinedIcon />,
    <ArrowCircleLeftOutlinedIcon />,
    <ArrowCircleRightOutlinedIcon />,
    <ArrowCircleLeftOutlinedIcon />,
    <ArrowCircleRightOutlinedIcon />,
    <FormatBoldOutlinedIcon />,
    <HdrAutoOutlinedIcon />,
  ];

  return (
    <footer>
      {konamiIcons.slice(0, konami + 1).map((icon, index) => (
        React.cloneElement(icon, { key: index, color: index <= konami - 1 ? 'primary' : 'inherit' })
      ))}
    </footer>
  );
}

export default Footer;
