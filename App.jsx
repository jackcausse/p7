import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
      </Main>
    </div>
  )
}

export default App
