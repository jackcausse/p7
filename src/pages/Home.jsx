import React from 'react'
import Banner from '../components/Banner.jsx'
import Cards from '../components/Cards.jsx'
import Main from '../Layout/Main.jsx'
import bannerHome from '../assets/bannerHome.jpg'
import datas from '../data/datas.json'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <Main>
      <div className='home'>
        {/* <Banner
          img={bannerHome}
          alt='Côte rocheuse'
          text1='Chez vous,'
          text2=' partout et ailleurs'
        /> */}
        <Banner
          img={bannerHome}
          alt='Côte rocheuse'
          text={'Chez vous, partout et ailleurs'}
        />

        <div className='cards'>
          {datas.map((index) => (
            <NavLink key={index.id} to={`/card/${index.id}`}>
              <Cards
                key={index.id}
                id={index.id}
                img={index.cover}
                title={index.title}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </Main>
  )
}

export default Home
