import React, { useState } from 'react'; // Keep this import only
import './Household.css';
import { useNavigate } from 'react-router-dom';

const Household = () => {

  const navigate = useNavigate();
      
        const handleButtonClick = () => {
          navigate('/form');
        };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const images = [
    { id: 1, src: '/images/chef.png', category: 'cooking related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 2, src: '/images/childcare.png', category: 'children related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 3, src: '/images/eldercare.png', category: 'Elders related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 4, src: '/images/laundry.png', category: 'Cloth related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    
  ];

  const categories = ['All', 'cooking related', 'children related', 'Elders related', 'Cloth related', 'Other'];
  const locations = ['All', 'chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Bangalore', 'Hyberabad', 'Pune'];

  const filteredImages = images.filter((image) => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || image.location.includes(selectedLocation);
    return matchesCategory && matchesLocation;
  });

  return (
    <div className="app">
      <h1>Home Services</h1>
      <div className="selectors">
        <div className="selector">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="selector">
          <label htmlFor="location">Location: </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="image-gallery">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.category} />
            <p>{image.category}</p>
            <button className="book-button" onClick={handleButtonClick}>Book</button> {/* Added button here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Household;
