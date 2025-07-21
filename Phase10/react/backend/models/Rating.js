const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  movieName: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('Rating', ratingSchema);
