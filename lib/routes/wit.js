'use strict';
const express = require('express');
const router = express.Router();
const {Wit,log} = require('node-wit');

router.post('/wit', function(req, res) {
  const client = new Wit({
    accessToken: 'S7MT5XPAQIWEMUGVDPPL7ROHLLLQCODD'
  });
  client.message(req.body.respuesta, {})
    .then((data) => {
      res.status(200).json({
        data: data
      });
    })
    .catch(function(err) {
      res.status(500).json({
        errorCode: 500,
        error: err
      });
    });
});

module.exports = router;
