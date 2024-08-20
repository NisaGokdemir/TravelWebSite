import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Exploring The World</h1>
        <p>Dive into a world of discovery, where every destination offers a new adventure and a glimpse into diverse cultures. Let your travels be a gateway to unforgettable experiences and endless inspiration.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
