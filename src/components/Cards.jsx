import React from 'react'
import data from '../data/datas.json'
import {Link} from 'react-router-dom'

const Cards = () => {
  return (
    <div className='cards'>
      {data.map((index) => (
        <Link key={index.id} to={`/card/${index.id}`} className='card-link'>
          <div className='img-container' key={data.id}>
            <div className='card-background'></div>
            <img className='card-img' src={index.cover} alt='' />
            <h2 className='card-title'>{index.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards
