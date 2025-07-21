import React, { useState } from 'react';
import './movie_display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from './firebase';
// import { MongoClient } from 'mongodb';
// firebase import
// Correct import for Firestore instance (db)
import { db } from './firebaseConfig';  // Import db from firebase.js, assuming you exported it as db

// Correct import for Firestore methods
import { addDoc, collection } from 'firebase/firestore';  // Import Firestore methods from firebase/firestore

const App = () => {

  // const MongoClient = new MongoClient('mongodb+srv://tech:tech2410@movierecommendation.nwujz.mongodb.net/collection?retryWrites=true&w=majority&appName=MovieRecommendation');

  const [showModal, setShowModal] = useState(false);
  const [userRating, setUserRating] = useState(9); // Default rating by the user

  // firebase mail
  const user = auth.currentUser;

  //movie name
  // Assuming you have the Firebase Firestore and other necessary imports above
  const [name, setName] = useState("Amaran");  // Correctly initialize the state
  const [email, setEmail] = useState(user.email);  // Set email based on current user


  // Function to handle modal open/close
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle user rating
  const handleRating = (rating) => {
    setUserRating(rating);
    toggleModal();
  };

  

  // connect of mongodb
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'mongodb+srv://myAtlasDBUser:<db_password>@movierecommendation.nwujz.mongodb.net/?retryWrites=true&w=majority&appName=MovieRecommendation', {
        method: "post",
        body: JSON.stringify({ name, email, userRating }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setEmail("");
        setName("");
        setUserRating("");
    }
  }

  const ref = collection(db, "movies"); // Firestore reference for "movies" collection

  const handleSave = async (e) => {
  e.preventDefault();

  // Prepare the data object to save
  let data = {
    name: name,          // name from the state
    email: email,        // email from the state
    userRating: userRating, // userRating from the state
  };

  try {
    // Add data to Firestore
    const docRef = await addDoc(ref, data);
    console.log("Document written with ID: ", docRef.id);
    alert("Data saved successfully!");

    // Optionally clear the state after saving
    setName("");
    setEmail("");
    setUserRating(0);
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to save data");
  }
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
            src="https://i.ibb.co/hWpJNYX/amaran.jpg" // Replace with actual movie poster
            alt="Amaran Poster"
            className="movie-poster"
          />
          <div className="movie-details">
            <h1>Amaran <span className="year">2024 • 2h 47m</span></h1>
            <p className="movie-description">
            Plot: The film is a biopic about the life of Major Mukund Varadarajran, an AC awardee who was martyred in 2014. It follows his personal and professional life, and includes themes of valor, glory, and purpose.<br></br> 
            Cast: Stars Sivakarthikeyan as Major Mukund Varadarajan, Sai Pallavi as his fiancée, Rahul Bose, and Bhuvan Arora.<br></br> 
            Director: Rajkumar Periasamy, who also wrote the screenplay. <br></br>
            Production: Produced by Raaj Kamal Films International and Sony Pictures Films India. <br></br>
            Release date: October 31, 2024. <br></br>
            Running time: 169 minutes. <br></br>
            Language: Tamil. <br></br>
            Budget: ₹70–200 crore. <br></br>
            Parents guide: Infrequent verbal references to a man having multiple girlfriends, but no sex or nudity is shown. <br></br>
            Amaran is based on the book series India's Most Fearless: True Stories of Modern Military Heroes by Shiv Aroor and Rahul Singh. <br></br>
            </p>
            <div className="tags">
              <span>Action</span>
              <span>Drama</span>
              <span>Biography</span>
            </div>
            <div className="rating-section">
              <div>
                <strong>IMDb Rating:</strong> ⭐ 8.9/10
              </div>
              <div>
                <strong>Your Rating:</strong> ⭐ {userRating}/10{' '}
                <button onClick={toggleModal} className="rate-button">Rate</button>
                <button onClick={handleSave} className="handle-button">Submit</button>
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
