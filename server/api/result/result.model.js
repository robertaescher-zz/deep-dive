'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResultSchema = new Schema({
  userAnswers: []
});

module.exports = mongoose.model('Result', ResultSchema);