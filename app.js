'use strict';
const express = require('express');
// const favicon = require('serve-favicon');
const path = require('path');
const logger = require('./lib/logger');
const expressWinston = require('express-winston');
const dotenv = require('dotenv');
dotenv.load();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
// const Reflect = require("reflect-metadata");
const routes = require('./lib/routes');
const extractJwt = require('./lib/routes/extract-jwt');
const publicPath = require('./config/public');
const user = require('./lib/models/user');
const admin = require('./lib/models/admin');

var app = express();


app.use(expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    colorize: false,
    meta: false,
    statusLevels: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));

//Baucis configuration
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://' + process.env.MONGODB_HOST + ':' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DB, {useMongoClient:true})
    .then(() => {
        logger.info('success mongoose connection.');
    })
    .catch((error) => {
        logger.error('Error mongoose connection: ', error);
    });

// app.use(publicPath.pathRegex, extractJwt);

const buildBaucis = require('./build-baucis');
const baucisInstance = buildBaucis();
app.use('/api', baucisInstance);

// admin
user.findOne({username:process.env.ORGANIZATION_ADMIN_USERNAME, tipo:'admin'}, function(err, usuario) {
    if (!usuario) {
        var firstUser = new user({
            username: process.env.ORGANIZATION_ADMIN_USERNAME,
            password: process.env.ORGANIZATION_ADMIN_PASSWORD,
            email: process.env.ORGANIZATION_ADMIN_EMAIL,
            tipo: process.env.ORGANIZATION_ADMIN_TIPO
        });
        firstUser.save().then(function(response) {
            var firstAdmin = new admin({
              direccion: process.env.ORGANIZATION_ADMIN_DIRECCION,
              nombre: process.env.ORGANIZATION_ADMIN_NOMBRE,
              email: process.env.ORGANIZATION_ADMIN_EMAIL,
              user: response
            });

            return firstAdmin.save();
        }).then(function() {
          logger.info('First admin created.');
        }).catch(function(firstAdminErr) {
            logger.error('firstAdminErr: ', firstAdminErr);
        });
    }else{
        logger.info('Ya existe un admin para esta organizacion');
    }

});

Object.keys(routes).forEach((key) => {
    app.use(routes[key]);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    logger.error('handleError: ', err);
    if (res.headersSent) {
        next(err);
        return;
    }
    let error = {};
    error.status = err.status;
    if(req.app.get('env') === 'development') {
        error.message = err.message;
        error.stack = err.stack;
    }
    res.status(err.status || 500).json({
        error
    });
});

module.exports = app;
