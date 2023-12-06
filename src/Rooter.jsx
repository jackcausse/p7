import {createRoot} from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <route path="card" element={<Card />} />
        <route path="about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

export default root
