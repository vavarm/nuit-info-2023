import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'; 

function Header() {
  return (
    <header>
      <div className="header-left">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
        <p className="logo-name">Nom du Logo</p>
      </div>
      <div className="header-right">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
