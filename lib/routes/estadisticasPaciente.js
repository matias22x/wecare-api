// - Cantidad de registros diarios que realizó entre las fechas dadas
// - Cantidad de veces que estuvo feliz  en los registros diarios entre las fechas dadas
// - Cantidad de veces que estuvo neutro en los registros diarios entre las fechas dadas
// - Cantidad de veces que estuvo triste en los registros diarios entre las fechas dadas
// - Cantidad de veces que estuvo enojado en los registros diarios entre las fechas dadas
// - Cantidad de turnos entre las fechas dadas
// - Cantidad de sesiones a las que asistió entre las fechas dadas


'use strict';
const express = require('express');
const router = express.Router();
const Pacientes   = require('../models/paciente');
const Turnos   = require('../models/turno');
const Registros   = require('../models/registros');


router.post('/estadisticaspaciente', function(req, res) {
  let estadisticas = {};

  let alumnoId = req.body.alumno;
  let fechaInicio = req.body.inicio;
  let fechaFin = req.body.fin;

  Registros.find({$and:[{'pacienteId': alumnoId},{createdAt:{$lte:fechaFin}},{createdAt:{$gte:fechaInicio}}]}).count().exec()
  .then(function(cantidadRegistros) {
    estadisticas.cantidadRegistros = cantidadRegistros;
    return Registros.find({$and:[{'pacienteId': alumnoId},{'animo.contento': true},{createdAt:{$lte:fechaFin}},{createdAt:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadRegistrosContento) {
    estadisticas.cantidadRegistrosContento = cantidadRegistrosContento;
    return Registros.find({$and:[{'pacienteId': alumnoId},{'animo.enojado':true},{createdAt:{$lte:fechaFin}},{createdAt:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadRegistrosEnojado) {
    estadisticas.cantidadRegistrosEnojado = cantidadRegistrosEnojado;
    return Registros.find({$and:[{'pacienteId': alumnoId},{'animo.neutral':true},{createdAt:{$lte:fechaFin}},{createdAt:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadRegistrosNeutral) {
    estadisticas.cantidadRegistrosNeutral = cantidadRegistrosNeutral;
    return Registros.find({$and:[{'pacienteId': alumnoId},{'animo.triste':true},{createdAt:{$lte:fechaFin}},{createdAt:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadRegistrosTriste) {
    estadisticas.cantidadRegistrosTriste = cantidadRegistrosTriste;
    return Turnos.find({$and:[{'alumno': alumnoId},{horario:{$lte:fechaFin}},{horario:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadTurnos) {
    estadisticas.cantidadTurnos = cantidadTurnos;
    return Turnos.find({$and:[{'alumno': alumnoId},{'sesion.observaciones':{$exists: true}},{horario:{$lte:fechaFin}},{horario:{$gte:fechaInicio}}]}).count().exec();
  })
  .then(function(cantidadSesiones) {
    estadisticas.cantidadSesiones = cantidadSesiones;
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
