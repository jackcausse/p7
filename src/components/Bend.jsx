import { useState } from 'react'
// import React, {useState} from 'react'
import arrowUp from '../assets/arrowUp.png'
import arrowDown from '../assets/arrowDown.png'

const Bend = ({title, content}) => {
  //creation du useState => pour l'ouverture et la fermeture du collapse > état de base > fermé
  const [open, setOpen] = useState(false)
  //creation de la fonction pour l'ouverture du collapse au click

  const click = () => {
    setOpen(!open)
  }

  return (
    <div className='Bend'>
      <div className={`bend-drop-down ${open && 'open'}`}>
        <div className='bend-title' onClick={click}>
          <p className='bend-text'>{title}</p>
          <span className='img-bend'>
            <img src={arrowDown} alt={arrowDown} />
          </span>
        </div>
        <div className='bend-content'>{content}</div>
      </div>
    </div>
  )
}

export default Bend


