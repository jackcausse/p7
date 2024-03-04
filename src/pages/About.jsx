import React from 'react'
import Main from '../Layout/Main.jsx'
import Banner from '../components/Banner.jsx'
import bannerAbout from '../assets/bannerAbout.jpg'
import DropDown from '../components/DropDown.jsx'
import aboutDatas from '../data/aboutDatas.json'

// page About qui contient les composants Banner et DropDown
const About = () => {
  return (
    <Main>
      <div className='about'>
        <Banner img={bannerAbout} alt='Monts enneigées' />

        <div className='about-dropdown'>
          {/* méthode map afin de trouver le titre et la description  */}
          {aboutDatas.map((item, index) => (
            <DropDown
              key={index}
              title={item.title}
              content={item.description}
            />
          ))}
        </div>
      </div>
    </Main>
  )
}

export default About
