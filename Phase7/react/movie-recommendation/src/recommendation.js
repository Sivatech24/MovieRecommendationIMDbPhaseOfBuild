// src/components/Recommendation.js
import React, { useState } from 'react';
import SearchPage from './search';
import FeaturedPage from './featured';

const Recommendation = () => {
  const [currentPage, setCurrentPage] = useState('recommendation');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieData = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', posterUrl: 'https://i.ibb.co/cwLx384/Inception.jpg' },
    { id: 2, title: 'The Dark Knight', description: 'A gritty superhero drama', posterUrl: 'https://i.ibb.co/sCXRK9L/The-Dark-Knight.jpg' },
    { id: 3, title: 'Interstellar', description: 'A space exploration epic', posterUrl: 'https://i.ibb.co/7CPbkLW/Interstellar.jpg' },
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage('featured');
  };

  const handleSearchClick = () => {
    setCurrentPage('search');
  };

  const handleBackToRecommendation = () => {
    setCurrentPage('recommendation');
  };

  if (currentPage === 'recommendation') {
    return (
      <div className="container">
        <h1>Featured Movies</h1>
        
        <div className="recommendations">
          {movieData.map((movie) => (
            <div key={movie.id} className="featured-card" onClick={() => handleMovieSelect(movie)}>
              <img src={movie.posterUrl} alt={movie.title} />
              <div className="card-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentPage === 'search') {
    return <SearchPage onMovieSelect={handleMovieSelect} onBack={handleBackToRecommendation} />;
  }

  if (currentPage === 'featured') {
    return <FeaturedPage movie={selectedMovie} onBack={handleBackToRecommendation} />;
  }
};

export default Recommendation;
