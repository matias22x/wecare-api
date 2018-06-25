'use strict';
const mongoose = require('mongoose');
const TurnoSchema = require('./schemas/turno-schema');

module.exports = mongoose.model('Turno', TurnoSchema);
