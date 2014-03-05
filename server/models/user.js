'use strict';

var connection = require('./index');
var Schema = require('mongoose').Schema;

var schema = new Schema({
  githubId: String,
  githubToken: String,
  username: String,
  email: String
});

// May change if using multiple strategies for Passport.
schema.path('username').required(true);
schema.path('githubId').required(true);
schema.path('githubToken').required(true);

module.exports = connection.model('User', schema);
