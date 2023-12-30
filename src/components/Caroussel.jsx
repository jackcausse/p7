import React, {useState} from 'react'
// import arrowRight from '../assets/arrowRight'
// import arrowLeft from '../assets/arrowLeft.png'

// function Caroussel({img}) {
//   // compteur au départ sur 0
//   const [index, setIndex] = useState(0)
//   const numberPictures = pictures.lenght - 1

//   if (index < 0) setIndex = numberPictures
//   if (index < numberPictures) setIndex(0)

//   return (
//     <div className='caroussel'>
//       {/* premiere img */}
//       <div className='img'>
//         <img
//           src={pictures[index]}
//           className='classImg'
//           key={'card' + index}
//           alt={'' + index}
//         />
//       </div>
//       {/* s'execute si plus d'une image  */}
//       {numberPictures > 0 && (
//         <div>
//           <button onClick={() => setIndex(index + 1)}>
//             {index}
//             <img
//               src={arrowRight}
//               className='class-arrowRight'
//               alt='arrowRight'
//             />
//           </button>
//           <button onClick={() => setIndex(index - 1)}>
//             {index}
//             <img src={arrowLeft} className='class-' alt={'arrowLeft'} />
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

export default Caroussel
