const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/Chats', {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = db;