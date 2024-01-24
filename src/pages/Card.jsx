import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import Main from '../Layout/Main.jsx'
import data from '../data/datas.json'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

const Card = () => {

  
  const { id } = useParams()
    , location = data.find((item, _i) => item.id  == id)
  console.log(id)
  console.log(location)


  // const [index, setIndex] = useState(0)
  // // const lenght = 8
  // const lenght = index.lenght - 1

  // const arrowPrevious = () => {
  //   const newIndex = index.length
  //   setIndex(newIndex < 0 ? lenght - 1 : newIndex)
  // }
  // const arrowNext = () => {
  //   const newIndex = index + 1
  //   setIndex(newIndex >= lenght ? 0 : newIndex)
  // }
 
  return (
    <Main>
      <div className='card'>
        <ul>
          {location.pictures.map((item, _i) => (
            <li key={item}>
              <img src={item} alt={'image_+ i'} />
            </li>
          ))}
          <Carousel pictures={location.pictures} />
        </ul>
      </div>
    
    </Main>
  )
}

export default Card


