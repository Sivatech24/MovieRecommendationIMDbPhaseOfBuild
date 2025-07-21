// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "movie-recommendation-9881e.firebaseapp.com",
  projectId: "movie-recommendation-9881e",
  storageBucket: "movie-recommendation-9881e.firebasestorage.app",
  messagingSenderId: "862125779983",
  appId: "1:862125779983:web:b9639f6c386b6762f1877a",
  measurementId: "G-Z01YXRQY3R"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);
