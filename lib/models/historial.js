'use strict';
const mongoose = require('mongoose');
const Historial = require('./schemas/historial-schema');

module.exports = mongoose.model('Historial', Historial);
