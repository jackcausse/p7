import React from 'react'
import Banner from '../components/Banner.jsx'
import Cards from '../components/Cards.jsx'
import Main from '../Layout/Main.jsx'
import bannerHome from '../assets/bannerHome.jpg'
import datas from '../data/datas.json'
import {NavLink} from 'react-router-dom'

const Home = () => {
  // data.forEach((e) => {
  //   console.log(e)
  // })
  return (
    <div className='home'>
      <Main className='up'>
        <Banner img={bannerHome} text='Chez vous partout et ailleurs' />
        <div className='cards'>
          {datas.map((index) => (
            <NavLink key={index.id} to={`/index/${index.id}`}>
              <Cards
                key={index.id}
                id={index.id}
                img={index.cover}
                title={index.title}
              />
            </NavLink>
          ))}
        </div>
      </Main>
    </div>
  )
}

export default Home
