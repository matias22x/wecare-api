'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var noticiaSchema = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    habilitado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = noticiaSchema;
