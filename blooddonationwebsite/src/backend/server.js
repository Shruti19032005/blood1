const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Camp model
const campSchema = new mongoose.Schema({
    name: String,
    location: String,
    date: Date,
    startTime: String,
    endTime: String,
    expectedTurnout: Number,
    contactPerson: String,
    contactNumber: String,
    email: String,
    description: String,
});

const Camp = mongoose.model('Camp', campSchema);

// Routes
app.post('/api/camps', async (req, res) => {
    const newCamp = new Camp(req.body); // Create a new camp using the request body

    try {
        const savedCamp = await newCamp.save();
        res.status(201).json(savedCamp);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Fetch all camps
app.get('/api/camps', async (req, res) => {
    try {
        const camps = await Camp.find();
        res.json(camps);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
