import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const HomePage = () => {
  const carouselImages = [
    { src: '/images/moana2.jpg', alt: 'Moana 2' },
    { src: '/images/amaran.jpg', alt: 'Amaran' },
    { src: '/images/dune.jpg', alt: 'Dune' },
  ];

  // State to manage the main image index and delay for image changes
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // 5 seconds delay

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const getPreviousIndex = (index) => (index === 0 ? carouselImages.length - 1 : index - 1);
  const getNextIndex = (index) => (index === carouselImages.length - 1 ? 0 : index + 1);

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
            className="main-image-img"
          />
        </div>

        <div className="small-images">
          <img
            src={carouselImages[getPreviousIndex(currentIndex)].src}
            alt={carouselImages[getPreviousIndex(currentIndex)].alt}
            className="small-image left"
          />
          <img
            src={carouselImages[getNextIndex(currentIndex)].src}
            alt={carouselImages[getNextIndex(currentIndex)].alt}
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
