'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  teste: String,
  options2: [{ 
  	opt1: String, 
  	opt2: String, 
  	opt3: String, 
  	opt4: String, 
  	opt5: String 
  }]
});

module.exports = mongoose.model('Answer', AnswerSchema);