import React from 'react'
import data from '../../data/data.json'
import '../../style/home.css'

function Home() {
  data.forEach((e) => {
    console.log(e)
  })
  return <div>'Chez vous, partout et ailleurs'</div>
}

export default Home
