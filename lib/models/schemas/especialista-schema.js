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
        type: String,
        unique: true
    },
    fecha_nacimiento: {
        type: String,
        required: true
    },
    pacientes: [{PacienteSchema}],
    user: UserSchema
    //armar esquema de sesiones
}, {
    timestamps: true
});

module.exports = especialistaSchema;
