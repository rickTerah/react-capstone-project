import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './subnav.scss';

class SubNav extends Component {
    state = {  }
    render() { 
        return ( 
    <ul className='subnav__list'>
        <li className="navbar__list-item"><NavLink to="/new-article" className="navbar__list-link">Your Feeds</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/new-gif" className="navbar__list-link">Global Feeds</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/new-article" className="navbar__list-link">Articles</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/new-gif" className="navbar__list-link">Gifs</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/new-article" className="navbar__list-link">New Article</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/new-gif" className="navbar__list-link">New Gif</NavLink></li>
    </ul>
         );
    }
}
 
export default SubNav;