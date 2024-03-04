import React, {useState} from 'react'

//  le composant DropDown dans la page About et Card affiche du contenu lorsqu'on le clique
// le composant fait appel aux props title, content, list
const DropDown = ({ title, content, list = false }) => {
  
  // le hook UseState permet l'affichage du texte des dropdowns ouvert
  // l'index est sur false 
  const [open, setOpen] = useState(false) || {}

  // const click permet de passer de true à false en modifiant les valeurs
  const click = () => {
    setOpen(!open)
  }

  return (
    <div className='dropdown'>
      <div className={`dropdown-rod ${open && 'open'}`}>
        <div className='dropdown-title' onClick={click}>
          <p className='dropdown-text'>{title}</p>
          <span className='dropdown-img'>
            <i className='fa-solid fa-chevron-down'></i>
          </span>
        </div>

        {!Array.isArray(content) ? (
          <div className='dropdown-content'>{content}</div>
        ) : (
          <ul className='dropdown-content'>
            {/* méthode map afin de trouver le contenu des listes */}
            {content.map((item, i) => (
              <li key={item + i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default DropDown
