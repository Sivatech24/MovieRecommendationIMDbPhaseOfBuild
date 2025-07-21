import React from 'react';
import './HomePage.css';

const ImdbPage = () => {
  return (
    <div>
      <h1>About IMDb</h1>
      <p>
        IMDb (Internet Movie Database) is an online database of information related to movies, TV shows, 
        video games, and streaming content online. It is the largest and most authoritative source of movie and 
        TV-related information available.
      </p>
      
      <h2>How IMDb Works</h2>
      <p>
        IMDb provides detailed information about films, TV series, and other media. Users can browse and search 
        through its vast collection of movies, actors, directors, writers, reviews, and ratings. IMDb offers 
        ratings and user-generated content, which helps others make decisions about which films to watch.
      </p>

      <p>
        Users can create accounts, rate films, write reviews, and even contribute to the database by adding new 
        movies or TV shows. IMDb also provides news and trivia related to the entertainment industry.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Search and browse movies, TV shows, and celebrities.</li>
        <li>User ratings and reviews for films and TV series.</li>
        <li>Personalized watchlists to track what you’ve seen or plan to watch.</li>
        <li>Recommendations based on your preferences.</li>
        <li>Industry news, trailers, and interviews.</li>
      </ul>

      <p>
        IMDb is used by millions of movie enthusiasts, filmmakers, and professionals in the entertainment industry 
        to find comprehensive information and stay updated on the latest content.
      </p>
    </div>
  );
};

export default ImdbPage;
