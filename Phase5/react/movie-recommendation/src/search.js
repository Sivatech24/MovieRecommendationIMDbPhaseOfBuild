// src/components/SearchPage.js
import React, { useState } from 'react';
import onBack from './recommendation';

const SearchPage = ({ onMovieSelect, onBack }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const movieData = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', posterUrl: 'inception-poster.jpg' },
    { id: 2, title: 'The Dark Knight', description: 'A gritty superhero drama', posterUrl: 'dark-knight-poster.jpg' },
    { id: 3, title: 'Interstellar', description: 'A space exploration epic', posterUrl: 'interstellar-poster.jpg' },
  ];

  const handleSearch = () => {
    const filteredMovies = movieData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredMovies);
  };

  return (
    <div>
      <h1>Search Page</h1>
      
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={handleSearch}>Search</button>
        <br></br>
        <button onClick={onBack}>Back to Recommendations</button>
      </div>

      <div className="search-results">
        {results.length > 0 ? (
          results.map((movie) => (
            <div key={movie.id} onClick={() => onMovieSelect(movie)}>
              <img src={movie.posterUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
