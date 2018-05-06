'use strict';
const mongoose = require('mongoose');
const EspecialistaSchema = require('./schemas/especialista-schema');

module.exports = mongoose.model('Especialista', EspecialistaSchema);
