import React from 'react'
import Main from '../Layout/Main.jsx'
import Banner from '../components/Banner.jsx'
import bannerAbout from '../assets/bannerAbout.jpg'
import DropDown from  '../components/DropDown.jsx'
import aboutDatas from '../data/aboutDatas.json'

const About = () => {
  return (
    <Main className='up'>
      <div className='about'>
        <Banner img={bannerAbout} title='bannerAbout' />

        <div className='about-dropdown'>
          {aboutDatas.map((item, index) => (
            <DropDown key={index} title={item.title} content={item.description} />
          ))}
        </div>
      </div>
    </Main>
  )
}

export default About
