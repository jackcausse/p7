import React from 'react'

function Main ({ children }) {
    // const children = props.children
    // console.log('children', children)
  return (
      <div className='main'>{ children }</div>
  )
}

export default Main