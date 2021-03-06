const EXPRESS = require('express');

const CONTACTO = require('../controllers/contacto.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', CONTACTO.create);
ROUTER.get('/read', CONTACTO.readAll);
ROUTER.get('/read', CONTACTO.readById);
ROUTER.delete('/delete', CONTACTO.delete);

module.exports = ROUTER;
