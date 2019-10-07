import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PageRoutes from './pageRoutes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <PageRoutes />
    </Router>
  )
}

export default App
