import React from 'react'
import {useRouteError, Link} from 'react-router-dom'
import Main from '../Layout/Main.jsx'

function Error() {
  const error = useRouteError()
  console.error(error)
  return (
   
      <div className='error'>
        <h1>404</h1>
        <h2>Oups! la page que vous avez demandez n'existe pas.</h2>

        <Link className='error-link' to='/'>
          Retourner sur la page d’accueil
        </Link>
      </div>
 
  )
}
export default Error
