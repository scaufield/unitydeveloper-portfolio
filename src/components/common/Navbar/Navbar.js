import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {


  return (
    <>
    <header className="header">
  <div className="header__content container">
    <div className="header__menu menu">
    <Link to='/' className="menu__icon icon-menu">John Doe</Link>
      <ul className="menu__body">
        <ul className="menu__list">
          <li><NavLink exact to='/' className="menu__link" activeClassName="menu-active"> Обо мне </NavLink> </li>
          <li><NavLink to='/skills' className="menu__link" activeClassName="menu-active">Навыки</NavLink></li>
          <li><NavLink  to='/projects' className="menu__link" activeClassName="menu-active">Проекты</NavLink></li>
        </ul>
      </ul>
    </div>
  </div>
</header>

    </>
  );
}

export default Navbar;
