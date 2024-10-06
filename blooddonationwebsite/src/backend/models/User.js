// models/Camp.js
const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
});

module.exports = mongoose.model('Camp', campSchema);

