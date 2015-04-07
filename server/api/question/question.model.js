'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  statement: String,
  choices: [
	  	// {
	  	// 	_id: Schema.Types.ObjectId,
	  	// 	text: String,
	   //      isUserAnswer: Boolean
	   //  }, 
	   //  {
	  	// 	_id: Schema.Types.ObjectId,
	  	// 	text: String,
	   //      isUserAnswer: Boolean
	   //  },
	   //  {
	  	// 	_id: Schema.Types.ObjectId,
	  	// 	text: String,
	   //      isUserAnswer: Boolean
	   //  }, 
	   //  {
	  	// 	_id: Schema.Types.ObjectId,
	  	// 	text: String,
	   //      isUserAnswer: Boolean
	   //  },
	   //  {
	  	// 	_id: Schema.Types.ObjectId,
	  	// 	text: String,
	   //      isUserAnswer: Boolean
	   //  }
    ]
});

module.exports = mongoose.model('Question', QuestionSchema);