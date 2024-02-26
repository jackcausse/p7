import React, {useState} from 'react'
import arrowDown from '../assets/arrowDown.png'
// const arrowDown = <i class="fa-solid fa-chevron-down"></i>

const DropDown = ({title, content, list = false




}) => {
  const [open, setOpen] = useState(false) || {}

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
        <div className='dropdown-content'>{content}</div>
      ) : (
        <ul className='dropdown-content'>
          {content.map((item,i) => (
            <li key={item+i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
