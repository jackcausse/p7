
// import {useState} from 'react'
import React, { useState} from 'react'
import arrowDown from '../assets/arrowDown.png'

const DropDown = ({title, content, list = false}) => {
  //creation du useState pour l'ouverture et la fermeture du drop  de base > fermé
  const [open, setOpen] = useState(false) || {}
  console.log(content)

  //création de la fonction pour l'ouverture du collapse au click
  const click = () => {
    setOpen(!open)
  }

  return (
    <div className={`dropdown-rod ${open && 'open'}`}>
      <div className='dropdown-title' onClick={click}>
        <p className='dropdown-text'>{title}</p>
        <span className='dropdown-img'>
          <img src={arrowDown} alt={arrowDown} />
        </span>
      </div>

      {!Array.isArray(content) ? (
        <div key={content} className='dropdown-content'>
           {content}
        </div>
      ) : (
        <ul className='dropdown-content'>
          {content.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown


