'use strict';
const mongoose = require('mongoose');
const AdminSchema = require('./schemas/admin-schema');

module.exports = mongoose.model('Admin', AdminSchema);
