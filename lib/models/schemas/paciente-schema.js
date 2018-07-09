'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const UserSchema = require('./user-schema');
const EspecialistaSchema = require('./especialista-schema');

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
    resumen_clinico: {
        type: String
    },
    user: {
        type: String
    },
    especialistaAsociado: {
        type: String
    },
    chatbot: {
        type: Boolean,
        default: true
    },
    curso: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = especialistaSchema;
