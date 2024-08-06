import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import './Packages.css';

export const Packages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch data from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        console.log('Fetching data from https://retoolapi.dev/qdMLVq/data');
        const response = await axios.get('https://retoolapi.dev/qdMLVq/data');
        console.log('API response data:', response.data);
        setPackages(response.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchPackages();
  }, []);

  // Filter packages based on search query
  const filteredPackages = packages.filter(pkg =>
    pkg.location && pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click event to navigate to package details
  const handleCardClick = (id) => {
    navigate('/kerala/${id}');
  };

  return (
    <div className="packages-container">
      {/* Search Section */}
      <section className="search-section">
        <h1>Tour Packages</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Where are you going?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </section>
      <section className="packages-list">
        <h2>{/* {filteredPackages.length}  */}500 Tour places</h2>
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card"
              onClick={() => handleCardClick(pkg.id)}
            >
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-info">
                <p className="package-location">
                  <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {pkg.location}
                </p>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-duration">
                  <AccessTimeIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {pkg.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};