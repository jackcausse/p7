import React from 'react'

// le composant Banner utilisé dans la page d'acceuil et la page About
// le composant fait appels aux props text1, text2 et img
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
