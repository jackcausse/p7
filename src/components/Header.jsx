import React from 'react'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="../logo.png" alt="logo Kasa" className="logo" />
        <div />
        <div className="header__nav">
          {/* <NavLink to="/Acceuil"  activeClassName="active">  */}
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}>
              <li>Acceuil</li>
            </NavLink>
            {/* <NavLink to="/About" exact activeClassName="active">  */}
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}>
              <li>A propos</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
