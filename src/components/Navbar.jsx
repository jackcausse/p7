import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
      <nav className='navbar'>
          <div className='navbar__logo'>
              <img src='logo.png' alt='navbar' />
          <div>Acceuil</div>
              <div>A propos</div>
          </div>     
     </nav>
  )
}

export default Navbar




