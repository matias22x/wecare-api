'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var registrosSchema = new Schema({
  actividades: {
    deporte: {
      type: Boolean
    },
    descanso: {
      type: Boolean
    },
    estudio: {
      type: Boolean
    },
    fiesta: {
      type: Boolean
    },
    juego: {
      type: Boolean
    },
    salida: {
      type: Boolean
    },
    nada: {
      type: Boolean
    }
  },
  lugares: {
    escuela: {
      type: Boolean
    },
    casa: {
      type: Boolean
    },
    plaza: {
      type: Boolean
    },
    casa_amigo: {
      type: Boolean
    }
  }
  animo: {
    contento: {
      type: Boolean
    },
    enojado: {
      type: Boolean
    },
    neutral: {
      type: Boolean
    },
    triste: {
      type: Boolean
    }
  },
  social: {
    amigos: {
      type: Boolean
    },
    familia: {
      type: Boolean
    },
    pareja: {
      type: Boolean
    },
    solo: {
      type: Boolean
    }
  },
  cuentanosmas: {
    type: String
  },
  pacienteId: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = registrosSchema;
