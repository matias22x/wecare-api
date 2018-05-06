'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var adminSchema = new Schema({
    direccion: {
        type: String
    },
    nombre: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = adminSchema;
