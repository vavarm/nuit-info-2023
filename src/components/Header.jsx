import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../CSS/Header.css'; 

function Header() {
  return (
    <header>
        <Grid container sx={{ justifyContent: 'center', gap:'25px' }}>
          <Link to="/login">
            <Button variant="contained" id="login" color="success"> Login </Button>
          </Link>

          <Link to="/quizz">
            <Button variant="contained" id="quizz" color="success"> Quizz </Button>
          </Link>

          <Link to="/game">
            <Button variant="contained" id="game" color="success"> Game </Button>
          </Link>
        </Grid>
    </header>
  );
}

export default Header;
