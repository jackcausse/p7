import React from 'react'
import { Navlink } from 'react-router-dom'
import '../style/error.css'
// import data from '../../data/data.json'
// import { useRouteError } from 'react-router-dom';

function Error() {
  // const error = useRouteError();
  // console.error(error);
  return (
       <main>
               <div className='Error'>
               <h1>404</h1>
            <h2>Oups! la page que vous avez demandez n'existe pas.</h2>
            <link to='/'>Retourner sur la page d’accueil</link>
            </div>
            </main>        
  )
}
 export default Error