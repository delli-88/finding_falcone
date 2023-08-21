import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  const headerLink = "Home"
  const headerName = "Finding Falcone"
  return (
    <header className="nav-bar">
      <div className="toolbar">
        <div className="header-left">
          <h1 className="logo">{headerName}</h1>
        </div>
        <nav className="header-right">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/" className="header-link">{headerLink}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
