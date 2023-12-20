import React from 'react'
import Banner from '../components/Banner.jsx'
import AppartGrid from '../components/ApartGrid.jsx'
import Main from '../components/Main.jsx';



function Home() {
  // data.forEach((e) => {
  //   console.log(e)
  // })
  return (
    <div>
      <Main>
        <Banner />
        <AppartGrid />
      </Main>
    </div>
  )
}

export default Home
