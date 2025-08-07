const mongoose = require('mongoose');                       //import mongoose

const articleSchema = new mongoose.Schema({                //define schema
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);      //create the model
