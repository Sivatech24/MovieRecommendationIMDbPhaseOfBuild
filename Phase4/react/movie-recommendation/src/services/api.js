import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const saveRating = async (movieName, rating, username) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addRating`, {
      username,
      movieName,
      rating,
    });
    return response.data.message;
  } catch (error) {
    console.error('Error saving rating:', error);
    throw error;
  }
};
