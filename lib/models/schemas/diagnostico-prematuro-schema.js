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
  gravedad: {
    type: Number
  },
  dniAlumno: {
    type: String
  },
  nombreAlumno: {
    type: String
  },
  asignado: {
    type: Boolean
  }
}, {
  timestamps: true
});

module.exports = diagnosticoPrematuroSchema;
