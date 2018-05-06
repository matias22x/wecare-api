'use strict';
const mongoose = require('mongoose');
const PacienteSchema = require('./schemas/paciente-schema');

module.exports = mongoose.model('Paciente', PacienteSchema);
