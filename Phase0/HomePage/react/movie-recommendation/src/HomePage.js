import React from 'react';
import './HomePage.css'; // Assuming you'll create a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <div className="header">
        <div className="banner">
          <img src="/images/moana2.jpg" alt="Moana 2" className="side-banner" />
          <div className="main-banner">
            <img src="/images/amaran.jpg" alt="Amaran" />
            <div className="views">25M+ VIEWS</div>
          </div>
          <img src="/path/to/dune.jpg" alt="Dune" className="side-banner" />
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="top-picks">
        <h2>Top Picks</h2>
        <div className="movie-list">
          <div className="movie-card">
            <img src="/images/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
              <button>Rate</button>
            </div>
          </div>
          <div className="movie-card">
            <img src="/images/gladiator.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
              <button>IMDb</button>
            </div>
          </div>
          <div className="movie-card">
            <img src="/images/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/images/dune.jpg" alt="Dune" />
            <div className="movie-info">
              <p>Dune</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/images/amaran.jpg" alt="Amaran" />
            <div className="movie-info">
              <p>Amaran</p>
            </div>
          </div>
          <div className="movie-card">
            <img src="/images/lucky-baskhar.jpg" alt="Lucky Baskhar" />
            <div className="movie-info">
              <p>Lucky Baskhar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Cards Section */}
      <div className="animation-cards">
        <h2>Animated Features</h2>
        <div className="animation-list">
          <div className="animation-card">
            <img src="/path/to/animation1.jpg" alt="Animation 1" />
            <div className="animation-info">
              <p>Animation 1</p>
              <span>⭐ 8.5</span>
            </div>
          </div>
          <div className="animation-card">
            <img src="/path/to/animation2.jpg" alt="Animation 2" />
            <div className="animation-info">
              <p>Animation 2</p>
              <span>⭐ 8.8</span>
            </div>
          </div>
          <div className="animation-card">
            <img src="/path/to/animation3.jpg" alt="Animation 3" />
            <div className="animation-info">
              <p>Animation 3</p>
              <span>⭐ 9.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer">
        <button>Menu</button>
        <button>Featured Films</button>
        <button>Recommendation</button>
        <button>Save</button>
        <button>Search</button>
        <button>You!</button>
      </div>
    </div>
  );
};

export default HomePage;
