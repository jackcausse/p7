import React, {useState, useEffect} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import data from '../data/datas.json'
import DropDown from '../components/DropDown.jsx'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

// tableau pour le nombre d'étoiles rouges ou grises
const arrayStars = [1, 2, 3, 4, 5]

// Card affiche les informations d'un appartement
const Card = () => {
  // récupère l'id dans la barre d'adresse du navigateur
  const {id} = useParams(),
    Location = data.find((item, _i) => item.id == id)

  // hook Navigate qui redirige vers la page 404 en cas d'erreur dans l'url du navigateur
   
  
 
  // // console.log(Navigate)
  // if (!Location) return <navigate replace to  />
  //  , navigate = useNavigate()
//   useEffect((item, i) => {
//   if (!Location) {
//       navigate('/404')
//   }
// }, [])
  // if (!Location) return <Error />
  // if (!location) return <navigate to='/Error'replace={true }/>

  const [indexPicture, setIndexPicture] = useState(0),
    length = Location?.pictures.length - 1,
    arrowPrevious = () => {
      setIndexPicture(length)
      console.log(indexPicture == 0)
      console.log(indexPicture)
      console.log(length)

      if (indexPicture == 0) {
        setIndexPicture(length)
      } else {
        setIndexPicture(indexPicture - 1)
      }
    },
    arrowNext = () => {
      if (indexPicture == length) setIndexPicture(0)
      else setIndexPicture(indexPicture + 1)
    }
  return (
    <Main>
      {/* pictures */}
      {!Location && <Navigate to='/404' replace={true} />}
      <div className='card-container'>
        <div className='card'>
          <ul>
            {Location?.pictures.map((item, _i) => (
              <li key={item} className={_i == indexPicture ? 'on' : ''}>
                <img src={item} alt={'image_+ i'} />
              </li>
            ))}
          </ul>
          {length > 0 && (
            <div>
              <span className='button button-previous'>
                <img src={arrowLeft} alt={arrowLeft} onClick={arrowPrevious} />
              </span>

              <span className='button button-next'>
                <img src={arrowRight} alt={arrowRight} onClick={arrowNext} />
              </span>
            </div>
          )}
          <p className='counter'>
            {indexPicture + 1}/{length + 1}
          </p>
        </div>

        {/* titre, emplacement et tags */}

        <div className='card-logements'>
          <div className='card-description'>
            <h1>{Location?.title}</h1>
            <h2>{Location?.location}</h2>

            <div className='card-description-tags'>
              {Location?.tags.map((element, tags) => {
                return (
                  <span className='tags' key={tags}>
                    {element}
                  </span>
                )
              })}
            </div>
          </div>

          {/* nom, photo de l'hôte et notation */}

          <div className='card-host'>
            <div className='host'>
              <span className='span'>{Location?.host.name}</span>

              <img
                className='host-picture'
                src={Location?.host.picture}
                alt=''></img>
            </div>

            <div className='card-rating'>
              {arrayStars.map((element) => {
                const numberStars = parseInt(Location?.rating)
                return (
                  <span
                    key={'star' + element}
                    className={element <= numberStars ? 'on' : 'off'}>
                    ★
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* description, équipements */}
        <div className='card-dropdown'>
          <DropDown
            keys={1}
            title='Description'
            content={Location?.description}
          />

          <DropDown
            keys={2}
            title='Équipements'
            content={Location?.equipments.map((equipments, index) => (
              <span key={index}>{equipments}</span>
            ))}
          />
        </div>
      </div>
    </Main>
  )
}

export default Card
