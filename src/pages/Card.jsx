import React, {useState} from 'react'
import {useParams, Navigate} from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import data from '../data/datas.json'
import DropDown from '../components/DropDown.jsx'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

// page Card affiche les informations d'un appartement
const Card = () => {

  // le hook useParams récupère l'id dans la barre d'adresse du navigateur
  const {id} = useParams(),
    Location = data.find((item, _i) => item.id == id)

  //  le hook useState utilisé ici afin de changer l'index de l'array picture initialement à 0
  const [indexPicture, setIndexPicture] = useState(0),
    length = Location?.pictures.length - 1,

    // arrowPrevious actualise l'index de l'array au clic sur la flêche prévious
    // l'image précédente apparait
    arrowPrevious = () => {
      if (indexPicture == 0) {
        setIndexPicture(length)
      } else {
        // 1 est soustrait à la valeur
        setIndexPicture(indexPicture - 1)
        // décrémente la valeur de 1
      }
    },
    // arrowNext actualise l'index de l'array au clic sur la flêche next
    // l'image suivante apparait
    arrowNext = () => {
      if (indexPicture == length) setIndexPicture(0)
      // 1 est ajouté à la valeur
      else setIndexPicture(indexPicture + 1)
      // incrémente la valeur de 1
    }

  /*  tableau pour le comptage des étoiles rouges et grises  */
  const arrayStars = [1, 2, 3, 4, 5]

  return (
    <Main>
      {/* redirection vers la page 404 au cas ou l'id dans le navigateur indique une route incorrecte*/}
      {!Location && <Navigate to='/404' replace={true} />}

      {/* --------------------------------------------------------------------- */}
      {/* pictures -------------------------------------------------------------*/}

      <div className='card-container'>
        <div className='card'>
          <ul>
            {/* méthode map afin de  trouver la bonne image */}
            {Location?.pictures.map((item, _i) => (
              // une key doit être unique
              <li key={item} className={_i == indexPicture ? 'on' : 'off'}>
                <img src={item} alt={'image_+ i'} />
              </li>
            ))}
          </ul>

          {/* affiche les flêches si length est supérieur à 1  */}
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

        {/* --------------------------------------------------------------------*/}
        {/* titre, emplacement et tags -----------------------------------------*/}

        <div className='card-logements'>
          <div className='card-description'>
            <h1>{Location?.title}</h1>
            <h2>{Location?.location}</h2>

            {/* méthode map afin de trouver les tags des appartements différent */}
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

          {/* ------------------------------------------------------------------*/}
          {/* nom, photo de l'hôte et notation ---------------------------------*/}

          <div className='card-host'>
            <div className='host'>
              <span className='span'>{Location?.host.name}</span>

              <img
                className='host-picture'
                src={Location?.host.picture}
                alt=''></img>
            </div>

            <div className='card-rating'>
              {/* méthode map afin de trouver la couleur des différentes étoiles */}
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

        {/* --------------------------------------------------------------------*/}
        {/* description, équipements -------------------------------------------*/}

        <div className='card-dropdown'>
          <DropDown
            title='Description'
            content={Location?.description}
          />

          <DropDown
            // méthode map qui permet de trouver l'équipement des différentes images
            title='Équipements'
            content={Location?.equipments.map((equipments, index) => (
              <span key={index}>{equipments}</span>
            ))}
          />
        </div>

        {/* --------------------------------------------------------------------*/}
      </div>
    </Main>
  )
}

export default Card
