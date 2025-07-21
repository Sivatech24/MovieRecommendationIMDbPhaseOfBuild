import React from 'react';
import './FeaturedPage.css'; // Assuming the CSS is in FeaturedMovies.css

const FeaturedMovies = ({ movies }) => {
  return (
    <div className="featured-container">
      <button className="featured-button">❮</button>
      <div className="featured-carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="featured-movie-card">
            <img src={movie.posterUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <button className="featured-button">❯</button>
    </div>
  );
};

export default FeaturedMovies;
