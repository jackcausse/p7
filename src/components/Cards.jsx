import React from 'react'



// function Cards({id, img, title}) {
//   return (
//     <div className='cards'>

//       <img src={img } alt={title} />
//       <div className='cards-background'></div>
//       <h2 className='cards-title'>{title}</h2>
//     </div>
//   )
// }

// export default Cards

const Cards = ({id, img, title}) => {
  return (
    <div className='card' id={id}>
      <div className='card-background'></div>
      <img className='card-img' src={img} alt='' />
      <h2 className='card-title'>{title}</h2>
    </div>
  )
}

export default Cards
