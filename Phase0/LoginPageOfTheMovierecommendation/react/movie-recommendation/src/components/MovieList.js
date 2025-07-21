import React from "react";

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      <h1>Top Picks</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => onMovieClick(movie)}
          >
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>IMDb Rating: {movie.imdbRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;