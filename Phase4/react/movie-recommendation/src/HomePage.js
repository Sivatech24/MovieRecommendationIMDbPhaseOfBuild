import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
// import React, { useState } from 'react';

import Amaran from './amaran';  // Ensure Amaran is a React component
import Moana from './moana';
import Dune from './dune';

// navigation bar element import
import Imdb from'./imdb';
import User from './user';
import Recommendation from './recommendation';
import Search from './search';
import Save from './save';
import Featured from './featured';
import Menu from './menu';


const HomePage = () => {

  const [showModal, setShowModal] = useState(false);
    const [userRating, setUserRating] = useState(9); // Default rating by the user
    const [currentName, setCurrentName] = useState(null);
  
    // Function to handle modal open/close
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    // Function to handle user rating
    const handleRating = (rating) => {
      setUserRating(rating);
      toggleModal();
    };

  const carouselImages = [
    { src: 'https://i.ibb.co/C6MfLLh/moana2.jpg', alt: 'Moana 2', page: 'moana' }, // Point to the Moana page URL
    { src: 'https://i.ibb.co/3pCfZ8c/amaran.jpg', alt: 'Amaran', page: 'amaran' },  // Use 'amaran' to indicate it's the Amaran React component
    { src: 'https://i.ibb.co/0mFszX8/dune.jpg', alt: 'Dune', page: 'dune' },         // Point to the Dune page URL
    { src: 'https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg', alt: 'Avengers Endgame', page: '/dune' },
    { src: 'https://i.ibb.co/9NZHsYn/Conclave.jpg', alt: 'Conclave', page: '/dune' },
    { src: 'https://i.ibb.co/pw7g16M/Deadpool-Wolverine.jpg', alt: 'Deadpool & Wolverine', page: '/dune' },
    { src: 'https://i.ibb.co/FbZmTjk/gladiator.jpg', alt: 'Gladiator', page: '/dune' },
    { src: 'https://i.ibb.co/yP55dpy/gladiator1.jpg', alt: 'Gladiator', page: '/dune' },
    { src: 'https://i.ibb.co/5M11sx2/IronMan.jpg', alt: 'IronMan', page: '/dune' },
    { src: 'https://i.ibb.co/7bX8f88/lucky-baskhar.jpg', alt: 'LuckyBaskhar', page: '/dune' },
    { src: 'https://i.ibb.co/m0ys75J/Our-Little-Secret.jpg', alt: 'Our Little Secret', page: '/dune' },
    { src: 'https://i.ibb.co/WpkRfzX/Pushpa.jpg', alt: 'Pushpa 2', page: '/dune' },
    { src: 'https://i.ibb.co/WGDxM5z/Smile-2.jpg', alt: 'Smile 2', page: '/dune' },
    { src: 'https://i.ibb.co/V3WThWT/Snow-White.jpg', alt: 'Snow White', page: '/dune' },
    { src: 'https://i.ibb.co/nkSYfQg/Squid-Game.jpg', alt: 'Squid Game', page: '/dune' },
    { src: 'https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg', alt: 'The Merry Gentlemen', page: '/dune' },
    { src: 'https://i.ibb.co/Jmc52vj/Thor.jpg', alt: 'Thor', page: '/dune' },
    { src: 'https://i.ibb.co/1K8yCg7/wicked.jpg', alt: 'Wicked', page: '/dune' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(null); // Track the current page for rendering

  // Change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Function to navigate to the movie page based on the provided page URL
  // Navigate to the movie page or render the appropriate component
  const navigateToMovie = (page) => {
    switch (page) {
      case 'amaran':
        setCurrentPage('amaran'); // Set the page to Amaran
        break;
      case 'moana':
        setCurrentPage('moana'); // Set the page to Avatar
        break;
      case 'dune':
        setCurrentPage('dune'); // Set the page to Inception
        break;
      default:
        window.location.href = page; // Navigate to other URLs
        break;
    }
  };

  

  const getPreviousIndex = (index) => (index === 0 ? carouselImages.length - 1 : index - 1);
  const getNextIndex = (index) => (index === carouselImages.length - 1 ? 0 : index + 1);

  if (currentPage === 'amaran') {
    return <Amaran />; // Render the Amaran component
  }
  if (currentPage === 'moana') {
    return <Moana />; // Render the Avatar component
  }
  if (currentPage === 'dune') {
    return <Dune />; // Render the Inception component
  }

  // navigation bar

  const navigateToNav = (name) => {
    switch (name) {
      case 'imdb':
        setCurrentName('imdb');
        break;
      case 'menu':
        setCurrentName('menu');
        break;
      case 'featured':
        setCurrentName('featured');
        break;
      case 'recommendation':
        setCurrentName('recommendation');
        break;
      case 'search':
        setCurrentName('search');
        break;
      case 'save':
        setCurrentName('save');
        break;
      case 'user':
        setCurrentName('user');
        break;
        default:
         window.location.href = name; // Navigate to other URLs
          break;
    }
  };

  if (currentName === 'imdb') {
    return <Imdb />;
  } 
  if (currentName === 'user') {
    return <User />;
  }
  if (currentName === 'save') {
    return <Save />;
  }
  if (currentName === 'menu') {
    return <Menu />;
  }
  if (currentName === 'featured') {
    return <Featured />;
  }
  if (currentName === 'recommendation') {
    return <Recommendation />;
  }
  if (currentName === 'search') {
    return <Search />;
  }

  

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <div className="navbar">
      <div className="nav-container">
          <button onClick={() => navigateToNav('imdb')}>IMDb</button>
          <button onClick={() => navigateToNav('menu')}>Menu</button>
          <button onClick={() => navigateToNav('featured')}>Featured Films</button>
          <button onClick={() => navigateToNav('recommendation')}>Recommendation</button>
          <button onClick={() => navigateToNav('search')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </button>
          <button onClick={() => navigateToNav('save')}>
            <FontAwesomeIcon icon={faBookmark} /> Save
          </button>
          <button onClick={() => navigateToNav('user')}>
            <FontAwesomeIcon icon={faUser} /> User
          </button>
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
            <img src="https://i.ibb.co/C6MfLLh/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/yP55dpy/gladiator1.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/1K8yCg7/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/7bX8f88/lucky-baskhar.jpg" alt="lucky-baskhar" />
            <div className="movie-info">
              <p>Lucky-baskhar</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/5M11sx2/IronMan.jpg" alt="IronMan" />
            <div className="movie-info">
              <p>IronMan</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/m0ys75J/Our-Little-Secret.jpg" alt="WOur-Little-Secret" />
            <div className="movie-info">
              <p>Our Little Secret</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/WpkRfzX/Pushpa.jpg" alt="Pushpa2" />
            <div className="movie-info">
              <p>Pushpa 2</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/9NZHsYn/Conclave.jpg" alt="Conclave" />
            <div className="movie-info">
              <p>Conclave</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/V3WThWT/Snow-White.jpg" alt="Snow-White" />
            <div className="movie-info">
              <p>Snow White</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg" alt="The-Merry-Gentlemen" />
            <div className="movie-info">
              <p>The Merry Gentlemen</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg" alt="Avengers-Endgame" />
            <div className="movie-info">
              <p>Avengers Endgame</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/nkSYfQg/Squid-Game.jpg" alt="Squid-Game" />
            <div className="movie-info">
              <p>Squid Game</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
