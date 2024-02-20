import React from 'react'

function Banner({text1, text2, img}) {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>

      <img className='img' src={img} alt='bannière paysage' />
    </div>
  )
}

export default Banner
