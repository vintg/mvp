const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/Reviews', { useNewUrlParser: true });

module.exports = db;