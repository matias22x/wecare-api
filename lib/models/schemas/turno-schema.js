'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var turnoSchema = new Schema({
    alumno: {
        type: String
    },
    horario: {
        type: Date
    },
    nota_previa: {
        type: String
    },
    especialista: {
        type: String
    },
    sesion: {
      estado_de_animo: {
        contento: {
          type: Boolean
        },
        neutral: {
          type: Boolean
        },
        triste: {
          type: Boolean
        },
        enojado: {
          type: Boolean
        }
      },
      observaciones: {
        type: String
      }
    }
}, {
    timestamps: true
});

module.exports = turnoSchema;
