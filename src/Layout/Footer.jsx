import React from 'react'
import logoFooter from '../assets/logoFooter.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo" />
      
      <img src={logoFooter} alt="logo Kasa" width='100'  />
      <div className="footer-text">© 2020 Kasa All right reserved</div>
    </div>
  )
}

export default Footer

