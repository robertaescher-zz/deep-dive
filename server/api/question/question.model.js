'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  statement: String,
  options2: { 
  	opt1: String, 
  	opt2: String, 
  	opt3: String, 
  	opt4: String, 
  	opt5: String 
  }
});

module.exports = mongoose.model('Question', QuestionSchema);