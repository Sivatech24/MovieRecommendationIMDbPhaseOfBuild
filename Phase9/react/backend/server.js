const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const dbURL = 'mongodb+srv://tech:tech2410@movierecommendation.nwujz.mongodb.net/collection?retryWrites=true&w=majority&appName=MovieRecommendation';

app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse JSON bodies

// Endpoint to save user data
app.post('/api/save', async (req, res) => {
  const { name, email, userRating } = req.body;

  if (!name || !email || !userRating) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const client = await MongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('movieRecommendation');
    const collection = db.collection('reviews');

    const result = await collection.insertOne({ name, email, userRating });
    client.close();

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
