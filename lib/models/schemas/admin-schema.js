'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const UserSchema = require('./user-schema');

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
    },
    user: UserSchema
}, {
    timestamps: true
});

module.exports = adminSchema;
