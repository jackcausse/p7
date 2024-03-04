import React from 'react'

// le composant Main englobe les différents composant entre le header et le Footer 
function Main({children}) {
  return <div className='main'>{children}</div>
}

export default Main
