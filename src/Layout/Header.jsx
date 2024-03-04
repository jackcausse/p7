// importation
import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/logo.png'

// le composant Header est affiché sur toutes les pages
function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <Link to='/'>
          <img className='logo' src={logo} alt='logo Kasa' />
        </Link>
      </div>

      <div className='header-nav'>
        <ul className='ul-nav'>
          <li>
            {/* Navlink est utilisé afin de rediriger les liens 'Acceuil et 'A Propos' */}
            <NavLink
              to='/'
              // Si la classe est active on met la classe active sinon on ne met rien
              // permet de souligner la classe active
              className={(nav) => (nav.isActive ? 'nav-active' : '')}>
              <p> Accueil</p>
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
