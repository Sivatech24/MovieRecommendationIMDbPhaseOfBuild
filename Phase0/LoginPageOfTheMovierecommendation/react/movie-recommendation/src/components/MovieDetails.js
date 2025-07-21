import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div className="movie-details">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <div className="movie-details-content">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>Release Date: {movie.releaseDate}</p>
          <p>IMDb Rating: {movie.imdbRating}</p>
          {movie.trailer && (
            <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
              Watch Trailer
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;