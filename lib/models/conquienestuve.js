'use strict';
const mongoose = require('mongoose');
const ConQuienEstuve = require('./schemas/con-quien-estuve-schema');

module.exports = mongoose.model('ConQuienEstuve', ConQuienEstuve);
