import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'; 
const Hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
        <h1>We Are Here to Serve Your Needs</h1>
        <p>our commitment to connecting families with reliable professionals.
         Whether it's plumbing, gardening, or culinary expertise, we ensure top-notch services tailored to your requirements.
         Trust us to make your transition smooth and your home our priority.</p>
         <button className='btn'>Discover Services<img src={dark_arrow} alt=" "/></button>
    </div>

    </div>
  )
}

export default Hero