'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const UserSchema = require('./user-schema');
const PacienteSchema = require('./paciente-schema');

var especialistaSchema = new Schema({
    dni: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String
    },
    direccion: {
        type: String
    },
    fecha_nacimiento: {
        type: String
    },
    user: {
        type: String
    },
    telefono: {
        type: String
    },
    diagnosticos_vistos: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = especialistaSchema;
