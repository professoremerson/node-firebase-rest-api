// definindo o strict mode
'use strict'

// Definindo imports
const firebase = require('../db')
const Pokemon = require('../models/Pokemon')
const firestore = firebase.firestore()

// Criando o método para adicionar um novo pokemon
const addPokemon = async (req, res, next) => {
  try {
    // criando uma constante para receber o conteúdo do corpo da requisição
    const data = req.body
    // executando o método da classe firestore que irá gravar o documento no banco
    await firestore.collection('pokemons').doc().set(data)
    res.status(201).send('Pokemon salvo com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para listar todos os Pokemons
const getAllPokemons = async (req, res, next) => {
  try {
    // criando um objeto para receber a coleção 'trainers'
    const pokemons = await firestore.collection('pokemons')
    // criando uma constante para receber os documentos da coleção
    const data = await pokemons.get()
    // criando um array vazio que irá receber os pokemons
    const pokemonsArray = []
    // testando se há documentos ou não na coleção
    if (data.empty) {
      res.status(404).send('Não há pokemons cadastrados!')
    } else {
      data.forEach(doc => {
        // para cada documento do banco será criando
        // um novo objeto da classe 'Pokemons'
        const trainer = new Pokemons(
          doc.id,
          doc.data().number,
          doc.data().name,
          doc.data().type,
          doc.data().description,
          doc.data().weight,
          doc.data().height
        )
        trainersArray.push(pokemon)
      })
      res.status(200).send(pokemonsArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para listar um pokemon específico
const getPokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // criando um objeto para receber a consulta no 'firestore'
    const pokemon = await firestore.collection('pokemons').doc(id)
    // criando um objeto para receber o documento
    const data = await trainer.get()
    // testando se existe um documento
    if (!data.exists) {
      res
        .status(404)
        .send('Não foi encontrado um treinador com o ID informado!')
    } else {
      res.status(200).send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para atualizar um pokemon específico
const updatePokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // criando um objeto para receber o corpo da requisição
    const data = req.body
    // criando um objeto para receber a consulta no 'firestore'
    const pokemon = await firestore.collection('pokemons').doc(id)
    // realizando a atualização
    await pokemon.update(data)
    res.status(201).send('Pokemon atualizado com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para excluir um pokemon específico
const deletePokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // realizando a exclusão do documento
    await firestore.collection('pokemons').doc(id).delete()
    res.status(200).send('Pokemon excluído com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  addPokemon,
  getAllPokemons,
  getPokemon,
  updatePokemon,
  deletePokemon
}
