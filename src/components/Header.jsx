import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'; 

function Header() {
  return (
    <header>
        <div id="left"></div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      
    </header>
  );
}

export default Header;
