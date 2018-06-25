'use strict';
const User = require('./user');
const Admin = require('./admin');
const Especialista = require('./especialista');
const Paciente = require('./paciente');
const Registros = require('./registros');
const DiagnosticoPrematuro = require('./diagnosticoprematuro');
const Turno = require('./turno');



module.exports = {
    User,
    Admin,
    Especialista,
    Paciente,
    Registros,
    DiagnosticoPrematuro,
    Turno
};
