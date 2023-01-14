import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Userliked from './pages/Userliked'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/' element={<Netflix/>} />
      <Route exact path='/player' element={<Player/>} />
      <Route exact path='/movies' element={<Movies/>} />
      <Route exact path='/mylists' element={<Userliked/>} />
      <Route exact path='/tv' element={<TvShows/>} />
    </Routes>
   </BrowserRouter>
    
  )
}
