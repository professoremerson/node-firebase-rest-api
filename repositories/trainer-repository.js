// definindo o strict mode
'use strict'

// Definindo imports
const firebase = require('../db')
const firestore = firebase.firestore()
const Trainer = require('../models/trainer')

class trainerRepository {
  constructor() {}

  // o create será responsável por receber do
  // controller o 'req.body' com os dados e
  // fazer a chamada com o firestore para a
  // persistência dos dados
  async create(data) {
    let res = await firestore.collection('trainers').doc().set(data)
    return res
  }

  // o update será responsável por receber do
  // controller o 'req.params.id' e o 'req.body' com os dados e
  // fazer a chamada com o firestore para a
  // atualização dos dados
  async update(id, data) {
    let trainer = await firestore.collection('trainers').doc(id)
    let res = await trainer.update(data)
    return res
  }

  // o getAll será responsável por receber por realizar
  // a busca pelos treinadores na base e devolver a listagem
  async getAll() {
    let trainers = await firestore.collection('trainers')
    let res = await trainers.get()
    let trainersArray = []
    if (res.empty) {
      return 'Não há treinadores cadastrados!'
    } else {
      res.forEach(doc => {
        // para cada documento do banco será criando
        // um novo objeto da classe 'Trainer'
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
      return trainersArray
    }

    return res
  }

  // o getByID receberá do controller o 'req.params.id' e
  // será responsável por realizar
  // a busca do treinador representado pelo 'id' informado
  async getById(id) {
    let trainer = await firestore.collection('trainers').doc(id)
    let res = await trainer.get()
    if (!res.exists) {
      return 'Não foi encontrado um treinador com o ID informado!'
    } else {
      return res
    }
  }

  // o delete receberá do controller o 'req.params.id' e
  // será responsável por realizar
  // a exclusão do treinador representado pelo 'id' informado
  async delete(id) {
    return await firestore.collection('trainers').doc(id).delete()
  }
}

module.exports = trainerRepository
