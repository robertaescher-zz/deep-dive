'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
        selectedAnswer: []
        // isUserAnswer: Boolean,
        // question_id: Schema.Types.ObjectId
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
    
});

module.exports = mongoose.model('Answer', AnswerSchema);