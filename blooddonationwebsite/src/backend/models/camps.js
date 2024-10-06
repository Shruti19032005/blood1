// models/Camp.js
const mongoose = require('mongoose');

const CampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Camp', CampSchema);
