'use strict';
const User = require('./user');
const Admin = require('./admin');
const Especialista = require('./especialista');
const Paciente = require('./paciente');
const Actividades = require('./actividades');
const ComoMeSiento = require('./comomesiento');
const ConQuienEstuve = require('./conquienestuve');
const DondeEstuve = require('./dondeestuve');
const Historial = require('./historial');
const DiagnosticoPrematuro = require('./diagnosticoprematuro');


module.exports = {
    User,
    Admin,
    Especialista,
    Paciente,
    Actividades,
    ComoMeSiento,
    ConQuienEstuve,
    DondeEstuve,
    Historial,
    DiagnosticoPrematuro
};
