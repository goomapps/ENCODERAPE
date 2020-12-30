const EXPRESS = require('express');

const PORTFOLIO = require('../controllers/portfolioController.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', PORTFOLIO.create);
ROUTER.get('/read', PORTFOLIO.readAll);
ROUTER.get('/read/:id', PORTFOLIO.readById);
ROUTER.put('/update/:id', PORTFOLIO.update);
ROUTER.delete('/delete/:id', PORTFOLIO.delete);

module.exports = ROUTER;
