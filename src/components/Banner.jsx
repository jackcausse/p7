import React from 'react'

function Banner({text, img}) {
  return (
    <div className='banner'>
      
      <h1 className='banner-text'>{text}</h1>
      <img className='img' src={img} alt='bannière paysage' />
      <div className='banner-filter'></div>
    </div>
  )
}

export default Banner
