'use strict';
const mongoose = require('mongoose');
const ConsejoSchema = require('./schemas/consejo-schema');

module.exports = mongoose.model('Consejo', ConsejoSchema);
