import React from 'react'

const Cards = ({ id, img, title }) => {
   
  return (
    <div className='card' id={id}>
      <div className='card-background'></div>
      <img className='card-img' src={img} alt='' />
      <h2 className='card-title'>{title}</h2>
    </div>
  )
}

export default Cards
