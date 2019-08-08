import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from './pageRoutes'

const App = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
    
  )
}

export default App
