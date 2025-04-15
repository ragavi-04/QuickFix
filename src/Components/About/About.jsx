import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
         <img src={about_img} alt='' className='about-img'/>
       </div>
       <div className='about-right'>
       <h3>ABOUT OUR SERVICES</h3>
    <h2>Simplifying Home Services for New Beginnings</h2>
    <p>Our platform is designed to assist newcomers in finding trusted local professionals for essential household services. 
    From skilled plumbers and talented house painters to expert chefs and dependable house servants, we connect you with the 
    best in your area.</p>
    <p> We provide detailed profiles, ratings, and reviews to help you make informed choices.With a user-friendly 
    booking system, accessing reliable services has never been easier. Whether it’s fixing a pipe, painting your home, or hiring 
    help for daily chores, we’ve got you covered.</p>
    <p> We prioritize quality and trust to ensure your comfort and satisfaction. Let us 
    make your transition to a new town stress-free and enjoyable!</p>

       </div>
    </div>
    

  )
}

export default About