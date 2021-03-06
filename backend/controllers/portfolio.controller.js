const PORTFOLIO = require('../models/portfolio.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let portfolio = await PORTFOLIO.create(req.body);
            res.status(201).send({
                message: "Portfolio añadido correctamente.",
                portfolio,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el portfolio.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let portfolio = await PORTFOLIO.find({ });
            res.status(200).send(portfolio);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let portfolio = await PORTFOLIO.findById({_id: req.params._id});
            res.status(200).send(portfolio);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async update(req, res){
        try{
            let portfolio = await PORTFOLIO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Portfolio actualizado correctamente.",
                portfolio,
            });
        }catch(e){
            res.status(500).send({
                message: "Error al actualizar el portfolio.",
                e
            });
        }
    },
    async delete(req, res) {
        try {
            let portfolio = await PORTFOLIO.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Portfolio eliminado correctamente.",
                portfolio,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el portfolio.",
                e,
            });
        }
    }
}

module.exports = CONTROLADOR;
