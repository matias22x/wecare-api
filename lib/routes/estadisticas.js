//Cantidad de alumnos registrados,+
// cantidad de especialistas registrados,+
// cantidad de turnos del dia+
//cantidad de turnos de los ultimos 30 días,+
// cantidad de diagnosticos de WeBot,+
// gravedad promedio de los diagnosticos registrados por WeBot+

'use strict';
const express = require('express');
const router = express.Router();
const Pacientes   = require('../models/paciente');
const Especialistas   = require('../models/especialista');
const Turnos   = require('../models/turno');
const DiagnosticoPrematuro   = require('../models/diagnosticoprematuro');

let estadisticas = {};

router.get('/estadisticas', function(req, res) {
  Pacientes.find().count().exec()
  .then(function(cantidadPacientes) {
    estadisticas.cantidadPacientes = cantidadPacientes;
    return Especialistas.find().count().exec();
  })
  .then(function(cantidadEspecialistas) {
    estadisticas.cantidadEspecialistas = cantidadEspecialistas;
    return DiagnosticoPrematuro.find();
  })
  .then(function(DiagnosticosPrematuros) {
    let gravedadTotal = 0;
    estadisticas.CantidadDiagnosticosPrematuros = DiagnosticosPrematuros.length;

    Object.keys(DiagnosticosPrematuros).forEach(function(key) {
      gravedadTotal = gravedadTotal + DiagnosticosPrematuros[key].gravedad;
    });

    estadisticas.gravedadPromedio = gravedadTotal/DiagnosticosPrematuros.length;

    return Turnos.find({$and:[{horario:{$lte:new Date()}},{horario:{$gte:new Date()}}]}).count().exec();
  })
  .then(function(cantidadTurnosDelDia) {
      estadisticas.cantidadTurnosDelDia = cantidadTurnosDelDia;
      var hoy = new Date();
      var priorDate = new Date(new Date().setDate(hoy.getDate()-30));
      return Turnos.find({$and:[{horario:{$lte:hoy}},{horario:{$gte:priorDate}}]}).count().exec();
  })
  .then(function(cantidadTurnosDelMes) {
    estadisticas.cantidadTurnosDelMes = cantidadTurnosDelMes;
    res.status(200).json({
      data: estadisticas
    });
  })
  .catch(function(err) {
    console.log(err);
    res.status(500).json({
      errorCode: 500,
      error: err
    });
  });
});

module.exports = router;
