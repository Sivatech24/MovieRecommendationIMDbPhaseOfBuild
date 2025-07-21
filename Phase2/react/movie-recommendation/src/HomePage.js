import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
// import React, { useState } from 'react';

import Amaran from './amaran';  // Ensure Amaran is a React component

const HomePage = () => {
  const carouselImages = [
    { src: '/images/moana2.jpg', alt: 'Moana 2', page: '/moana2' }, // Point to the Moana page URL
    { src: '/images/amaran.jpg', alt: 'Amaran', page: 'amaran' },  // Use 'amaran' to indicate it's the Amaran React component
    { src: '/images/dune.jpg', alt: 'Dune', page: '/dune' },         // Point to the Dune page URL
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAmaranPage, setIsAmaranPage] = useState(false); // Track if Amaran page should be shown

  // Change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Function to navigate to the movie page based on the provided page URL
  const navigateToMovie = (page) => {
    if (page === 'amaran') {
      setIsAmaranPage(true); // Show the Amaran component
    } else {
      window.location.href = page;  // Navigate to other pages
    }
  };

  const getPreviousIndex = (index) => (index === 0 ? carouselImages.length - 1 : index - 1);
  const getNextIndex = (index) => (index === carouselImages.length - 1 ? 0 : index + 1);

  if (isAmaranPage) {
    return <Amaran />; // Render the Amaran component
  }


  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-container">
          <button>IMDb</button>
          <button>Menu</button>
          <button>Featured Films</button>
          <button>Recommendation</button>
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
          <button><FontAwesomeIcon icon={faBookmark} /> Save</button>
          <button><FontAwesomeIcon icon={faUser} /> User</button>
        </div>
      </div>

      {/* Header Section */}
      <div className="header">
        <div className="main-image">
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            onClick={() => navigateToMovie(carouselImages[currentIndex].page)} // Navigate to the movie page
            className="main-image-img"
          />
        </div>

        <div className="small-images">
          <img
            src={carouselImages[getPreviousIndex(currentIndex)].src}
            alt={carouselImages[getPreviousIndex(currentIndex)].alt}
            onClick={() => navigateToMovie(carouselImages[getPreviousIndex(currentIndex)].page)} // Navigate to the previous movie page
            className="small-image left"
          />
          <img
            src={carouselImages[getNextIndex(currentIndex)].src}
            alt={carouselImages[getNextIndex(currentIndex)].alt}
            onClick={() => navigateToMovie(carouselImages[getNextIndex(currentIndex)].page)} // Navigate to the next movie page
            className="small-image right"
          />
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="top-picks">
        <h2>Top Picks</h2>
        <div className="movie-list">
          <div className="movie-card small">
            <img src="/images/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
            </div>
          </div>
          <div className="movie-card small">
            <img src="/images/gladiator.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
            </div>
          </div>
          <div className="movie-card small">
            <img src="/images/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
              <span>⭐ 8.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
