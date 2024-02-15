import React from 'react'

function Banner({text, text1, text2, img, alt}) {
  return (
    <div className='banner'>
      <div className='banner-text'>
        {/* {text} */}
        <span>{text1}</span>
        <span>{text2}</span>
      </div>

      <img className='img' src={img} alt='bannière paysage' />
    </div>
  )
}

export default Banner
