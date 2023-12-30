import React from 'react'
import Main from '../components/Main.jsx'
import Banner from '../components/Banner.jsx'
import bannerAbout from '../assets/bannerAbout.jpg'
import Bend from '../components/Bend.jsx'
import aboutDatas from '../data/aboutDatas.json'

const About = () => {
  return (
    <Main>
      <div className='about'>
        <Banner img={bannerAbout} title='bannerAbout' />

        <div className='about-bend'>
          {aboutDatas.map((item, index) => (
            <Bend key={index} title={item.title} content={item.description} />
          ))}
        </div>
      </div>
    </Main>
  )
}

export default About
