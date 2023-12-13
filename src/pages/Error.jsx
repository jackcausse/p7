import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/error.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Error() {

  return (
    
    <main>
      <Header />
      <div className='Error'>
        <h1>404</h1>
        <h2>Oups! la page que vous avez demandez n'existe pas.</h2>
        <Link to='/'>Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </main>
  )
}
export default Error