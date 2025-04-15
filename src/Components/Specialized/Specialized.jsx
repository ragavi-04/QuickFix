import React, { useState } from 'react'; // Keep this import only
import './Specialized.css';
import { useNavigate } from 'react-router-dom';

const Specialized = () => {
  const navigate = useNavigate();
    
      const handleButtonClick = () => {
        navigate('/form');
      };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const images = [
    { id: 1, src: '/images/Tech support.png', category: 'Technical related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 2, src: '/images/Security service.png', category: 'security related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 3, src: '/images/pet.png', category: 'Pets related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    { id: 4, src: '/images/Event Support.png', category: 'Event Management related', location: 'chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyberabad, Pune' },
    
  ];

  const categories = ['All', 'Technical related', 'security related', 'Pets related', 'Event Management related', 'Other'];
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

export default Specialized;
