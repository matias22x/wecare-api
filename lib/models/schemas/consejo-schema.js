'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var consejoSchema = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = consejoSchema;
