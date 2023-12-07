import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <DIV>
      <div className="header__logo">
        <img src="../logo.png" alt="logo Kasa" />
        <div />
        <nav className="header__nav">
          <Link to="/">Acceuil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
    </DIV>
  )
}

export default Header
