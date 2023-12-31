import { useState } from 'react'
// import React, {useState} from 'react'
import arrowDown from '../assets/arrowDown.png'

const Dropdown = ({title, content}) => {
  //creation du useState => pour l'ouverture et la fermeture du collapse > état de base > fermé
  const [open, setOpen] = useState(false)
  //creation de la fonction pour l'ouverture du collapse au click

  const click = () => {
    setOpen(!open)
  }

  return (
    <div className='Dropdown'>
      <div className={`dropdown-rod ${open && 'open'}`}>
        <div className='dropdown-title' onClick={click}>
          <p className='dropdown-text'>{title}</p>
          <span className='dropdown-img'>
            <img src={arrowDown} alt={arrowDown} />
          </span>
        </div>
        <div className='dropdown-content'>{content}</div>
      </div>
    </div>
  )
}

export default Dropdown


