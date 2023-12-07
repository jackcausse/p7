import React from 'react'
import data from '../data/data.json'
import '../styles/navbar.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Header from  '../components/Header'

function Home() {
  data.forEach((e) => {
    console.log(e)
  })
  return
  <div>
    <Header />
    <Banner />
    <div className="Banner">
      <h1>'Chez vous, partout et ailleurs'</h1>
    </div>
    <Card />
    <Footer />
  </div>
}

export default Home
