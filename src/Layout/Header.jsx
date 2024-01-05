import React from 'react'
// import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        {/* Sans source le navigateur va chercher le logo dans le dossier public */}
        <img src='logo.png' alt='logo Kasa' className='logo' />
      </div>

      {/* <div className='header__nav'> */}
   
      <NavLink
        to='/'
        // Si la classe est active on met la classe active sinon on ne met rien
        className={(nav) => (nav.isActive ? 'nav-active' : '')}>
        <div>Acceuil</div>
      </NavLink>
    
      <NavLink
        to='/about'
        className={(nav) => (nav.isActive ? 'nav-active' : '')}>
        <div>A propos</div>
      </NavLink>
    </div>
  )
}

export default Header
