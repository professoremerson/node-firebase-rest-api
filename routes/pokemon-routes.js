// realizando as importações
const express = require('express')
const {
  addPokemon,
  getAllPokemon,
  getPokemon,
  updatePokemon,
  deletePokemon
} = require('../controllers/pokemonController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso 'pokemon'
// definindo a rota para a listagem de pokemon
router.get('/pokemon', getAllPokemon)
// definindo a rota para listar pokemon específico
router.get('/pokemon/:id', getPokemon)
// definindo a rota para cadastro de pokemon
router.post('/pokemon', addPokemon)
// definindo a rota para alterar um pokemon
router.put('/pokemon/:id', updatePokemon)
// definindo a rota para excluir um pokemon
router.delete('/pokemon/:id', deletePokemon)

module.exports = {
  routes: router
}
