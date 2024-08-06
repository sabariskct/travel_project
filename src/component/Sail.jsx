import React from 'react';
import { Link } from 'react-router-dom';
import './Sail.css';

const Sail = () => {
  const packages = [
    { src: 's3.png', name: 'Cruise from Kochi', location: 'Kochi - Lakshadweep - at Sea - Mumbai', duration: '7 days', groupSize: '30', languages: 'English, Hindi' },
    { src: 's4.png', name: 'Chennai Cruise', location: 'Chennai - at Sea - Chennai', duration: '5 days', groupSize: '25', languages: 'English, Tamil' },
    { src: 's5.png', name: 'Western Sea-Cation', location: 'Mumbai - at Sea - Kochi', duration: '8 days', groupSize: '35', languages: 'English, Marathi' },
    { src: 's1.png', name: 'Sundowner To Goa', location: 'Mumbai – Goa - Mumbai', duration: '3 days', groupSize: '20', languages: 'English, Konkani' },
    { src: 's6.png', name: 'Eastern Sea-Cation', location: 'Kolkata - at Sea - Vizag' },
    { src: 's7.png', name: 'South India Cruise', location: 'Chennai - Kochi - at Sea' },
    { src: 's8.png', name: 'Heritage Cruise', location: 'Mumbai - Diu - at Sea' },
    { src: 's9.png', name: 'Beach Cruise', location: 'Goa - at Sea - Mumbai' }
  ];

  return (
    <div className="page">
      <div className="background-container">
        <h1 className="heading">Welcome to Our Cruises</h1>
        <p className="text">Explore the world's most beautiful destinations with us!</p>
      </div>
      <div className="main-content">
        <div className="text-content">
          <h2 className="subheading">Cruises Packages in India</h2>
          <p className="paragraph">
            How does the idea of “waking up to a new destination every day” sound to you? Apparently, the imagination itself creates goosebumps of excitement for all of us.
            What if we tell you that you can experience the voyage of the breathtaking Indian Ocean with Cordelia Cruises? Well, it sounds great. 
            <br />
            <br />
            Isn’t it? The cruise tour will be launched in some fantastic destinations, like, Goa, Andaman, Kochi, Mumbai, Ganapatipule, Diu, and many other seaboard destinations. 
            <br />
            Cordelia Cruises is all set to serve you with the mesmerizing beauty of the Indian coastline. Click here to view all Cordelia Cruise Packages.
          </p>
        </div>
        <div className="image-content">
          <img src="s1.png" alt="Cruise Destination" className="image" />
        </div>

        <div className="text-content">
          <h2 className="subheading">Onboarding price on Cruises</h2>
          <p className="paragraph">
            If you were eagerly waiting for a fun family holiday, this is the best time for it. 
            Surprise your family with a holiday plan like never before. Take them to a new world of amusement on the cruise.
            <br />
            <br />
            We assure you that these bunches of amazing provisions by Cordelia cruise will be one of your most comfortable journeys. 
            Wait, are you pondering upon the Cordelia Cruise prices?
            <br />
            <br/>
            So, if you are also willing to spend some quality time with your family and loved ones and want them to enjoy leaving the pandemic situation behind, do book the tour. 
            This journey will be unforgettable for you and your family.
          </p>
        </div>
        <div className="image-content">
          <img src="s2.png" alt="Cruise Destination" className="image" />
        </div>
      </div>

      {/* New Section for Booking Images with Details */}
      <div className="booking-images">
        {packages.map((pkg, index) => (
          <div key={index} className="booking-card">
            <img src={pkg.src} alt={pkg.name} className="booking-image" />
            <div className="booking-info">
              <h3 className="package-name">{pkg.name}</h3>
              <p className="location">{pkg.location}</p>
              <Link 
                to={{
                  pathname: "/enquire",
                  state: { selectedPackage: pkg }
                }} 
                className="book-now"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sail;
