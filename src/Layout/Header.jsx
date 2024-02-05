import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/logo.png'
function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
      
            <Link to='/'>
              {/* Sans source le navigateur va chercher le logo dans le dossier public */}
              <img className='logo' src='logo' alt='logo Kasa' />
             </Link>
      </div>

      <div className='header-nav'>
        <ul className='ul-nav'>
          <li>
            <NavLink
              to='/'
              // Si la classe est active on met la classe active sinon on ne met rien
              className={(nav) => (nav.isActive ? 'nav-active' : '')}>
              <p> Acceuil</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={(nav) => (nav.isActive ? 'nav-active' : '')}>
              <p>A propos</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
