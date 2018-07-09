'use strict';
const mongoose = require('mongoose');
const NoticiaSchema = require('./schemas/noticia-schema');

module.exports = mongoose.model('Noticia', NoticiaSchema);
