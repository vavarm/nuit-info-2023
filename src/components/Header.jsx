import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../CSS/Header.css'; 

function Header() {
  return (
    <header>
        <Grid>
          <Link to="/login">
            <Button variant="contained" id="login" color="success"> Login </Button>
          </Link>
          <Link to="/quiz">
            <Button variant="contained" id="quiz" color="success"> Quiz </Button>
          </Link>
        </Grid>
    </header>
  );
}

export default Header;
