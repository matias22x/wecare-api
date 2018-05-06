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
        type: String,
        unique: true
    },
    fecha_nacimiento: {
        type: String,
        required: true
    },
    resumen_clinico: {
        type: String,
        required: true
    },
    especialista: EspecialistaSchema,
    //armar esquema de sesiones
    user: UserSchema
}, {
    timestamps: true
});

module.exports = especialistaSchema;
