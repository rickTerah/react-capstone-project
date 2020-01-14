import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Navbar.scss';

const navbar = ({ user }) => (
  <div className="navbar">
    <Link to="/" className="navbar__list-link">
      <img className="navbar__logo-img" src={logo} alt="Logo" />
    </Link>
    <ul className="navbar__list">
      <li className="navbar__list-item"><NavLink to="/" className="navbar__list-link">Home</NavLink></li>
      {!user && (
        <li className="navbar__list-item"><NavLink to="/login" className="navbar__list-link">Sign in</NavLink></li>
      )}
      {user && (
       <React.Fragment>
         {user.isAdmin && (
         <li className="navbar__list-item"><NavLink to="/register" className="navbar__list-link">Register</NavLink></li>
      )}
          <li className="navbar__list-item"><NavLink to="/profile" className="navbar__list-link">{user.email}</NavLink></li>
          <li className="navbar__list-item"><NavLink to="/logout" className="navbar__list-link">Logout</NavLink></li>
       </React.Fragment>
      )}
    </ul>
  </div>
);

export default navbar;
