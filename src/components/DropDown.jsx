import React, {useState} from 'react'
import arrowDown from '../assets/arrowDown.png'
// const arrowDown = <i class="fa-solid fa-chevron-down"></i>
// ;<i className='fa-solid fa-chevron-down'></i>

const DropDown = ({title, content, list = false}) => {
  const [open, setOpen] = useState(false) || {}
  // const arrowDown = <i className="fa-solid fa-chevron-down"></i>;

  const click = () => {
    setOpen(!open)
  }
  return (
    // <div className='dropdown'>
    <div className={`dropdown-rod ${open && 'open'}`}>
      <div className='dropdown-title' onClick={click}>
        <p className='dropdown-text'>{title}</p>
        <span className='dropdown-img'>
          {/* <img src={arrowDown} alt={arrowDown} /> */}
          {/* <i className='arrowDown'></i> */}
          <i className='fa-solid fa-chevron-down'></i>
        </span>
      </div>
      {/* </div> */}

      {!Array.isArray(content) ? (
        <div className='dropdown-content'>{content}</div>
      ) : (
        <ul className='dropdown-content'>
          {content.map((item, i) => (
            <li key={item + i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
