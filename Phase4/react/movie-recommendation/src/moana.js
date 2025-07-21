import React, { useState } from 'react';
import './movie_display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [userRating, setUserRating] = useState(9); // Default rating by the user

  // Function to handle modal open/close
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle user rating
  const handleRating = (rating) => {
    setUserRating(rating);
    toggleModal();
  };

  return (
    <div className="app-container">
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
      {/* Main Movie Section */}
      <div className="movie-container">
        <div className="movie-header">
          <img
            src="https://i.ibb.co/h9XCZzW/moana2.jpg" // Replace with actual movie poster
            alt="Moana 2"
            className="movie-poster"
          />
          <div className="movie-details">
            <h1>Moana 2 <span className="year">2024 • 2h 47m</span></h1>
            <p className="movie-description">
            Moana 2 is a 2024 film about Moana's journey to the far seas of Oceania with Maui and a new crew of unlikely seafarers: <br></br>
            Plot: Moana receives a call from her wayfinding ancestors and must journey into dangerous, long-lost waters. She reunites with Maui and assembles a crew to find the lost island of Motufetu and break its curse. <br></br>
            Cast: Auli'i Cravalho as Moana, Dwayne Johnson, and Alan Tudyk. <br></br>
            Writers: David G. Derrick Jr., Ron Clements, and John Musker. <br></br>
            Reviews: Some say the film is fun, has magic and adventure, and wonderful animation. Others say it's not as good as the first film, but the new cast is well-used and the songs fit well. <br></br>
            </p>
            <div className="tags">
              <span>Computer Animation</span>
              <span>Sea Adventure</span>
              <span>Adventure</span>
              <span>Adventure</span>
              <span>Comedy</span>
              <span>Family</span>
              <span>Fantasy</span>
              <span>Musical</span>
            </div>
            <div className="rating-section">
              <div>
                <strong>IMDb Rating:</strong> ⭐ 8.9/10
              </div>
              <div>
                <strong>Your Rating:</strong> ⭐ {userRating}/10{' '}
                <button onClick={toggleModal} className="rate-button">Rate</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Amaran | Official Trailer</h2>
          <iframe
            src="https://www.youtube.com/embed/H7FT-d4YA74" // Replace with actual YouTube trailer
            title="Amaran Trailer"
            className="trailer-video"
          />
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="top-picks">
        <h2>You May like.</h2>
        <div className="movie-list">
          <div className="movie-card small">
            <img src="https://i.ibb.co/h9XCZzW/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/fdMqmMM/Gladiator1.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/9ss1PrX/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/hDxwqgQ/lucky-baskhar.jpg" alt="lucky-baskhar" />
            <div className="movie-info">
              <p>Lucky-baskhar</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/1XN8w6Z/IronMan.jpg" alt="IronMan" />
            <div className="movie-info">
              <p>IronMan</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/4M10dP5/Our-Little-Secret.jpg" alt="WOur-Little-Secret" />
            <div className="movie-info">
              <p>Our Little Secret</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/cCz9WyJ/Pushpa.jpg" alt="Pushpa2" />
            <div className="movie-info">
              <p>Pushpa 2</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/HCkVrxq/Conclave.jpg" alt="Conclave" />
            <div className="movie-info">
              <p>Conclave</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/343PDx9/Snow-White.jpg" alt="Snow-White" />
            <div className="movie-info">
              <p>Snow White</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/tY9L6Yj/The-Merry-Gentlemen.jpg" alt="The-Merry-Gentlemen" />
            <div className="movie-info">
              <p>The Merry Gentlemen</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/TmZTG6N/Avengers-Endgame.jpg" alt="Avengers-Endgame" />
            <div className="movie-info">
              <p>Avengers Endgame</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/dfPLzCD/Squid-Game.jpg" alt="Squid-Game" />
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

      {/* Rating Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Rate this</h2>
            <p>Amaran</p>
            <div className="stars">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={index < userRating ? 'star selected' : 'star'}
                  onClick={() => handleRating(index + 1)}
                >
                  ⭐
                </span>
              ))}
            </div>
            <div className="modal-actions">
              <button onClick={toggleModal} className="cancel-button">Cancel</button>
              <button onClick={() => handleRating(userRating)} className="rate-button">Rate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
