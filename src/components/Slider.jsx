import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
  const getMovies=(from,to)=>{
    return movies.slice(from,to);
  }
  return (
   
    <div>
      <CardSlider title="Trending Now" data={getMovies(0,10)}/>
      <CardSlider title="New Release" data={getMovies(10,20)}/>
      <CardSlider title="BlockBuster Movies" data={getMovies(20,30)}/>
      <CardSlider title="Popular on Netflix" data={getMovies(30,40)}/>
      <CardSlider title="Action movies" data={getMovies(40,50)}/>
      <CardSlider title="Epics" data={getMovies(50,60)}/>
    </div>
  )
}
