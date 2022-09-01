// realizando as importações
const express = require('express')
const {
    addPokemon,
    getAllPokemons,
    getPokemon,
    updatePokemon,
    deletePokemon
} = require('../controllers/pokemonController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso 'pokemon'
// definindo a rota para a listagem de pokemons
router.get('/pokemons', getAllPokemons)
// definindo a rota para listar um pokemon específico
router.get('/pokemons/:id', getPokemon)
// definindo a rota para cadastro de pokemons
router.post('/pokemons', addPokemon)
// definindo a rota para alterar um pokemon
router.put('/pokemons/:id', updatePokemon)
// definindo a rota para excluir um pokemon
router.delete('/pokemons/:id', deletePokemon)

module.exports = {
  routes: router
}
