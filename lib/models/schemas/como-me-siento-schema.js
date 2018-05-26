'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var comoMeSientoSchema = new Schema({
  valor: {
    type: Boolean
  },
  fecha: {
    type: String
  },
  texto: {
    type: String
  },
  paciente: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = comoMeSientoSchema;
