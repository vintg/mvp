const mongoose = require('mongoose');
const db = require('./db');

mongoose.Promise = global.Promise;

const chatSchema = new mongoose.Schema({
  chatID: {type: Number,
          unique: true},
  author: String,
  avatarUrl: String,
  msg: String,
  reply: String,
},
  {
    timestamps: true
  }
);

const Chat = mongoose.model('Chats', chatSchema);

module.exports = Chat;
