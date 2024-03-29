import React from 'react'
import Banner from '../components/Banner.jsx'
import Cards from '../components/Cards.jsx'
import Main from '../Layout/Main.jsx'
import bannerHome from '../assets/bannerHome.jpg'

// page Home
const Home = () => {
  return (
    <Main>
      <div className='home'>
        <Banner
          img={bannerHome}
          alt='Côte rocheuse'
          text1='Chez vous, '
          text2=' partout et ailleurs'
        />
        <Cards />
      </div>
    </Main>
  )
}

export default Home
