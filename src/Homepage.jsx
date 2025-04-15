import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const HomePage= () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title
        subTitle = 'OUR PROGRAM'
        Title = 'What We Offer'
      />
      <Programs/>
     <About/>
     <Title
        subTitle = 'TESTIMONIALS'
        Title = 'What Customer says'
      />
      <Testimonials/>
      <Title
        subTitle = 'Contact Us '
        Title = 'Get in Touch'
      />
      <Contact/>
      <Footer/>
     
     
      </div>
    </div>
  )
}

export default HomePage