// realizando as importações
const express = require('express')
const {
  addTrainer,
  getAllTrainers,
  getTrainer,
  updateTrainer,
  deleteTrainer
} = require('../controllers/trainerController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso 'trainer'
// definindo a rota para a listagem de treinadores
router.get('/trainers', getAllTrainers)
// definindo a rota para listar treinador específico
router.get('/trainers/:id', getTrainer)
// definindo a rota para cadastro de treinadores
router.post('/trainers', addTrainer)
// definindo a rota para alterar um treinador
router.put('/trainers/:id', updateTrainer)
// definindo a rota para excluir um treinador
router.delete('/trainers/:id', deleteTrainer)

module.exports = {
  routes: router
}
