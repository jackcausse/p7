import React from 'react'

import {useParams} from 'react-router-dom'
import Main from '../Layout/Main.jsx'

import Error from '../pages/Error.jsx'
import datas from '../data/datas.json'



const Card = () => {

const routeParams = useParams()
  return (
    <Main className='up'>
      <div className='card'>card</div>
    </Main>
  )
}

export default Card


