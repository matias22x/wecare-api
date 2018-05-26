'use strict';
const mongoose = require('mongoose');
const ActividadesSchema = require('./schemas/actividades-schema');

module.exports = mongoose.model('Actividades', ActividadesSchema);
