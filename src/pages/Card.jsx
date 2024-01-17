import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import data from '../data/datas.json'
import DropDown from '../components/DropDown'
import redStar from '../assets/redStar.png'
import greyStar from '../assets/greyStar.png'

const Card = () => {

  const {id} = useParams()
  console.log(id)
  location = data.find((item, i) => item.id == id)
  console.log(location)

 
  return (
    <Main >
      <div className='card'>
        <ul>
          {' '}
          {location.pictures.map((item, i) => (
            <li>
              {' '}
              <img src={item} alt={'image_' + i} />
            </li>
          ))}{' '}
        </ul>
      </div>
    </Main>
  )
}

export default Card


