// definindo o strict mode
'use strict'

// Definindo imports
const firebase = require('../db')
const Pokemon = require('../models/pokemon')
const firestore = firebase.firestore()

// Criando o método para adicionar um novo Pokémon
const addPokemon = async (req, res, next) => {
  try {
    // criando uma constante para receber o conteúdo do corpo da requisição
    const data = req.body
    // executando o método da classe firestore que irá gravar o documento no banco
    await firestore.collection('Pokemon').doc().set(data)
    res.status(201).send('Pokémon salvo com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para listar todos os pokémon
const getAllPokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber a coleção 'Pokemon'
    const Pokemon = await firestore.collection('Pokemon')
    // criando uma constante para receber os documentos da coleção
    const data = await Pokemon.get()
    // criando um array vazio que irá receber os pokémon
    const PokemonArray = []
    // testando se há documentos ou não na coleção
    if (data.empty) {
      res.status(404).send('Não há Pokémon cadastrados!')
    } else {
      data.forEach(doc => {
        // para cada documento do banco será criando
        // um novo objeto da classe 'Pokemon'
        const Pokemon = new Pokemon(
          doc.id,
          doc.data().number,
          doc.data().name,
          doc.data().type,
          doc.data().description,
          doc.data().weight,
          doc.data().height
        )
        PokemonArray.push(Pokemon)
      })
      res.status(200).send(PokemonArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para listar um Pokémon específico
const getPokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // criando um objeto para receber a consulta no 'firestore'
    const Pokemon = await firestore.collection('Pokemon').doc(id)
    // criando um objeto para receber o documento
    const data = await Pokemon.get()
    // testando se existe um documento
    if (!data.exists) {
      res.status(404).send('Não foi encontrado um Pokémon com o ID informado!')
    } else {
      res.status(200).send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para atualizar um Pokémon específico
const updatePokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // criando um objeto para receber o corpo da requisição
    const data = req.body
    // criando um objeto para receber a consulta no 'firestore'
    const Pokemon = await firestore.collection('Pokemon').doc(id)
    // realizando a atualização
    await Pokemon.update(data)
    res.status(201).send('Pokémon atualizado com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para excluir um Pokémon específico
const deletePokemon = async (req, res, next) => {
  try {
    // criando um objeto para receber o parâmetro 'id' da requisição
    const id = req.params.id
    // realizando a exclusão do documento
    await firestore.collection('Pokemon').doc(id).delete()
    res.status(200).send('Pokémon excluído com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  addPokemon,
  getAllPokemon,
  getPokemon,
  updatePokemon,
  deletePokemon
}
