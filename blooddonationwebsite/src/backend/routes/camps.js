// routes/camps.js
const express = require('express');
const multer = require('multer');
const Camp = require('../models/Camp');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Folder to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);  // Unique filename
    }
});

const upload = multer({ storage });

// POST route to register a new camp
router.post('/', upload.single('photo'), async (req, res) => {
    const { name, date, location, description, contact } = req.body;

    if (!req.file) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const newCamp = new Camp({
        name,
        date,
        location,
        description,
        contact,
        photoUrl: req.file.path,  // Save the path to the uploaded file
    });

    try {
        const savedCamp = await newCamp.save();
        res.status(201).json(savedCamp);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
