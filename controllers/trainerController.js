// definindo o strict mode
'use strict'

// Definindo imports
const firebase = require('../db')
const Trainer = require('../models/trainer')
const firestore = firebase.firestore()

// Criando o método para adicionar um novo treinador
const addTrainer = async (req, res, next) => {
  try {
    // criando uma constante para receber o conteúdo do corpo da requisição
    const data = req.body
    // executando o método da classe firestore que irá gravar o documento no banco
    await firestore.collection('trainers').doc().set(data)
    res.status(201).send('Treinador salvo com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Criando o método para listar todos os treinadores
const getAllTrainers = async (req, res, next) => {
  try {
    // criando um objeto para receber a coleção 'trainers'
    const trainers = await firestore.collection('trainers')
    // criando uma constante para receber os documentos da coleção
    const data = trainers.get()
    // criando um array vazio que irá receber os treinadores
    const trainersArray = []
    // testando se há documentos ou não na coleção
    if (data.empty) {
      res.status(404).send('Não há treinadores cadastrados!')
    } else {
      data.forEach(doc => {
        const trainer = new Trainer(
          doc.id,
          doc.data().name,
          doc.data().userName,
          doc.data().email,
          doc.data().password,
          doc.data().birthDate,
          doc.data().age,
          doc.data().genre,
          doc.data().city,
          doc.data().state
        )
        trainersArray.push(trainer)
      })
      res.status(200).send(trainersArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}
