import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Card from './pages/Card.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'

import './styles/index.scss'

// on retrouve l'id root dans le dossier public
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='card/:id' element={<Card />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
        {/* // reçoit les routes dont le path ne correspond à aucune route déclarée, redirigées vers 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
