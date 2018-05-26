'use strict';
const mongoose = require('mongoose');
const ComoMeSientoSchema = require('./schemas/como-me-siento-schema');

module.exports = mongoose.model('ComoMeSiento', ComoMeSientoSchema);
