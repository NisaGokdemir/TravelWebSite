import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>DISCOVER NEW HORIZONS</h3>
        <h2>Explore A Different Way To Travel</h2>
        <p>Experience travel in a whole new light with our curated journeys that go beyond the ordinary. Whether you’re an adventurer seeking thrill or a culture enthusiast eager to explore local traditions, we offer personalized travel experiences that cater to your every need.</p>
        <p>Our trips are designed to uncover hidden gems and provide authentic encounters that truly connect you with the places you visit. Discover vibrant cultures, breathtaking landscapes, and local insights that you won't find in typical guidebooks. </p>
        <p>Our expert guides, insider knowledge, and carefully crafted itineraries ensure that each trip is not just a getaway, but a transformative journey that broadens your horizons and leaves lasting memories.</p>
      </div>
    </div>
  )
}

export default About
