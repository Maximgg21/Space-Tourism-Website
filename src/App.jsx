import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import NoPage from "./pages/NoPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />}>
            {/* smth */}
          </Route>
          <Route path='technology' element={<Technology />}>
            {/* smth */}
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
