import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Navbar.scss';

const navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar__list-link">
      <img className="navbar__logo-img" src={logo} alt="Logo" />
    </Link>
    <ul className="navbar__list">
      <li className="navbar__list-item"><NavLink to="/" className="navbar__list-link">Home</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/login" className="navbar__list-link">Sign in</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/register" className="navbar__list-link">Sign up</NavLink></li>
      <li className="navbar__list-item"><NavLink to="/new-article" className="navbar__list-link">New Article</NavLink></li>
    </ul>
  </div>
);

export default navbar;
