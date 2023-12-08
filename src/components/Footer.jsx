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

  // useEffect
  React.useEffect(() => {
    if(konami === 10) {
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
      setKonami(-1);
      return;
    }
    else{  
      handleKonami()
    }
  }, [konami])

  const handleKonami = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' && (konami === 0 || konami === 1)) {
        setKonami(konami + 1);
      }
      else if (event.key === 'ArrowDown' && (konami === 2 || konami === 3)) {
        setKonami(konami + 1);
      }
      else if (event.key === 'ArrowLeft' && (konami === 4 || konami === 6)) {
        setKonami(konami + 1);
      }
      else if (event.key === 'ArrowRight' && (konami === 5 || konami === 7)) {
        setKonami(konami + 1);
      }
      else if (event.key === 'b' && konami === 8) {
        setKonami(konami + 1);
      }
      else if (event.key === 'a' && konami === 9) {
        setKonami(konami + 1);
      }
      else {
        setKonami(0);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }

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

  return <footer>{konamiIcons.slice(0, konami + 1).map((icon, index) => React.cloneElement(icon, { key: index, color: index <= konami - 1 ? 'primary' : 'inherit' }))}</footer>;

}

export default Footer;
