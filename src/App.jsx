import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './index.css'

import Navbar from './components/Navbar.jsx'
// import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <AppartmentGrid />
      </Main>
    </div>
  )
}

export default App
