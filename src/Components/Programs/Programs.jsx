import React from 'react'
import './Programs.css'
import programs_1 from '../../assets/programs-1.png'; 
import programs_2 from '../../assets/programs-2.png'; 
import programs_3 from '../../assets/programs-3.png'; 
import programs_4 from '../../assets/programs-4.png'; 
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/homeservice'); // Navigate to the About page
  };
  const handleSelect = () =>{
    navigate('/household');
  }
  const handleTouch = () =>{
    navigate('/convenience');
  }
  const handlePress = () =>{
    navigate('/specialized');
  }
  return (
    <div className='body'>
    <div className='programs'>
    <div className='program'>
      <img src = {programs_1} alt=" "/>
      <div className='content'>
        <h1>Home Services</h1>
        <p>Plumbing, Electrical Repairs, Gardening, Painting & Renovation, Carpentry</p>
        <button className='btn' onClick={handleButtonClick}> Read More</button>
       
      </div>

    </div>
    <div className='program'>
      <img src = {programs_2} alt=" "/>
      <div className='content'>
        <h1>Household Assistance</h1>
        <p>Chef Services, Cleaning, Laundry Assistance, Childcare,Elderly Care</p>
        <button className='btn' onClick={handleSelect}> Read More</button>
      </div>
    </div>
    <div className='program'>
      <img src = {programs_3} alt=" "/>
      <div className='content'>
        <h1>Convenience Services</h1>
        <p>Grocery & Errands, Vehicle Cleaning,Home Delivery, Personal Organizers</p>
        <button className='btn' onClick={handleTouch}> Read More</button>
        
      </div>
    </div>
    <div className='program'>
      <img src = {programs_4} alt=" "/>
      <div className='content'>
        <h1>Specialized Services</h1>
        <p>Pet Care, Event Support, Security Services,Tech Support</p>
        <button className='btn' onClick={handlePress}> Read More</button>
        
      </div>
    </div>

    </div>
    </div>
  )
}

export default Programs