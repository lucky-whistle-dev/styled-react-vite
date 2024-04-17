import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

//import page components
import Home from './pages/Home'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={Home}  />
      </Routes>
    </HashRouter>
  )
}

export default App
