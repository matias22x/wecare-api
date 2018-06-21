'use strict';
const mongoose = require('mongoose');
const RegistrosSchema = require('./schemas/registros-schema');

module.exports = mongoose.model('Registros', RegistrosSchema);
