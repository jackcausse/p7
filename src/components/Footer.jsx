import React from 'react'
// import { Link } from 'react-router-dom'
import LogoFooter from '../assets/logoFooter.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo" />
      <img src="logoFooter.png" alt="logo" width="100" />
      <div className="footer__text">© 2020 Kasa All right reserved</div>
    </div>
  )
}

export default Footer
