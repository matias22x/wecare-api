'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var diagnosticoPrematuroSchema = new Schema({
  diagnostico: [
    {
      pregunta: {
        type: String
      },
      respuesta: {
        type: String
      }
    }
  ],
  paciente: {
    type: String
  },
  especialista: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = diagnosticoPrematuroSchema;
