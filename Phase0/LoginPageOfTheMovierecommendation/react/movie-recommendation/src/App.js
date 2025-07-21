import React, { useState } from "react";
import { auth, database } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details in the Realtime Database
      await set(ref(database, "users/" + user.uid), { name, email });
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="background"></div>
      <div className="form-container">
        {isSignup ? (
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <label htmlFor="signup-name">Your Name</label>
            <input
              type="text"
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a onClick={toggleForm}>Sign In</a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Sign In</h2>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign In</button>
            <p>
              Don’t have an account? <a onClick={toggleForm}>Sign Up</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
