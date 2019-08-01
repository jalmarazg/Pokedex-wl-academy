import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from './pageRoutes'
import './App.css'

const App = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
  )
}

export default App
