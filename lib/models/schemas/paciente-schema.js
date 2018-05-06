'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

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
    }
    //aca abajo deberiamos tener la conexion al usuario,a su especialista y un array a sesiones
}, {
    timestamps: true
});

module.exports = especialistaSchema;
