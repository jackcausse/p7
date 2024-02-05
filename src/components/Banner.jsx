import React from 'react'

function Banner({text,text1, text2, img,alt}) {
  return (
    <div className='banner'>
      <div className='banner-text'>
        {text}
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <img className='img' src={img} alt='bannière paysage' />
      {/* <div className='banner-filter'></div> */}
    </div>
  )
}

export default Banner
