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
    }
}, {
    timestamps: true
});

module.exports = turnoSchema;
