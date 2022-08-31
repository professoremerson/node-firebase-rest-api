const express = require('express')

const {
    addTrainer,
    getAllTrainers,
    getTrainer,
    updateTrainer,
    deleteTrainer
} = require('../controllers/trainerController')

//Iniciando as rotas do express
const router = express.Router()

//Criando as rotas para o recusro trainer
router.get('/trainers', getAllTrainers)
//definindo uma rotapara cadastro dos treinadores
router.get('/trainers/:id', getTrainer)
router.put('/trainers/:id', updateTrainer)
router.delete('/trainers/:id', deleteTrainer)
router.post('/trainers', addTrainer)
module.exports = {
    routes: router
}
