import React from 'react'
import logoFooter from '../assets/logoFooter.png'

function Footer() {
  return (
    <div className='footer'>
      <img className='footer-logo' src={logoFooter} alt='logo footer' />
      <div className='footer-text'>© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
