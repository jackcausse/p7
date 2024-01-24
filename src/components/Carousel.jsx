import React,{useState} from 'react'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'


const Carousel = ({pictures}) => {

  
      const [indexPicture, setIndexPicture] = useState(0)
      
       const lenght = indexPicture.lenght-1

      const arrowPrevious = () => {
       
        const newIndexPicture = index-1 
      
        setIndexPicture(newIndexPicture < 0 ? lenght - 1 : newIndex)
      }
      const arrowNext = () => {
        const newIndexPicture = index + 1
        setIndexPicture(newIndexPicture >= lenght ? 0 : newIndex)
      }

      return (
        <div className='carousel'>
          {/* affiche arrow seulement si length > 1 */}
          {lenght > 1 && (
            <img
              className='carousel-previous'
              onClick={arrowPrevious}
              src={arrowLeft}
              alt='arrow left'
            />
          )}
          
          {lenght > 1 && (
            <img
              className='carousel-next'
              onClick={arrowNext}
              src={arrowRight}
              alt='arrowRight'
            />
          )}
        
          <p className='counter'>{indexPicture + 1}/{pictures.length}</p>
        </div>
      )
    }
export default Carousel
    

