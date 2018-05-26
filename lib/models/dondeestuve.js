'use strict';
const mongoose = require('mongoose');
const DondeEstuve = require('./schemas/donde-estuve-schema');

module.exports = mongoose.model('DondeEstuve', DondeEstuve);
