import React from 'react'
import Signup from './pages/Signup'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRouter'
import './index.css';

const App = () => {
  return (
    <Router>
      <AppRoutes/>
   </Router>
  )
}

export default App
