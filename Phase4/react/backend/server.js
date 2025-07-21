const express = require('express');
const mongoose = require('mongoose');
const Rating = require('./models/Rating');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/movieRatings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// API to add or update a rating
app.post('/addRating', async (req, res) => {
  const { username, movieName, rating } = req.body;

  if (!username || !movieName || !rating) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  try {
    const existingRating = await Rating.findOne({ username, movieName });

    if (existingRating) {
      existingRating.rating = rating;
      await existingRating.save();
      return res.status(200).send({ message: 'Rating updated successfully' });
    }

    const newRating = new Rating({ username, movieName, rating });
    await newRating.save();

    res.status(201).send({ message: 'Rating saved successfully' });
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
