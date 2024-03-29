import React from 'react'
import {Link} from 'react-router-dom'
import Main from '../Layout/Main.jsx'

// page Error
function Error() {
  return (
    <Main>
      <div className='error'>
        <h1>404</h1>
        <h2>Oups! la page que vous avez demandez n'existe pas.</h2>

        <Link className='error-link' to='/'>
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Main>
  )
}
export default Error
