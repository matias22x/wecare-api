'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var historialSchema = new Schema({
  paciente: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = historialSchema;
