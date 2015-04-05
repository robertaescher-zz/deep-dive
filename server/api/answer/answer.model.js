'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  questions: []
});

module.exports = mongoose.model('Answer', AnswerSchema);