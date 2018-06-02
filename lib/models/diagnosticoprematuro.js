'use strict';
const mongoose = require('mongoose');
const DiagnosticoPrematuro = require('./schemas/diagnostico-prematuro-schema');

module.exports = mongoose.model('DiagnosticoPrematuro', DiagnosticoPrematuro);
