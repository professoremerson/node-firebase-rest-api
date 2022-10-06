// definindo o strict mode
'use strict'

// Definindo imports
require('../models/trainer')
const repository = require('../repositories/trainer-repository')

function trainerController() {}

trainerController.prototype.post = async (req, res) => {
  // criando um objeto para receber a execução do repositório
  let resultado = await new repository().create(req.body)
  // retornando uma resposta para a requisição
  res.status(201).send(resultado)
}

trainerController.prototype.put = async (req, res) => {
  // criando um objeto para receber a execução do repositório
  let resultado = await new repository().update(req.params.id, req.body)
  // retornando uma resposta para a requisição
  res.status(202).send(resultado)
}

trainerController.prototype.get = async (req, res) => {
  // criando um objeto para receber a execução do repositório
  let lista = await new repository().getAll()
  // retornando uma resposta para a requisição
  res.status(200).send(lista)
}

trainerController.prototype.getById = async (req, res) => {
  // criando um objeto para receber a execução do repositório
  let trainer = await new repository().getById(req.params.id)
  // retornando uma resposta para a requisição
  res.status(200).send(trainer.data())
}

trainerController.prototype.delete = async (req, res) => {
  // criando um objeto para receber a execução do repositório
  let resultado = await new repository().delete(req.params.id)
  // retornando uma resposta para a requisição
  res.status(204).send(resultado)
}

// exportando o modulo
module.exports = trainerController

// Criando o método para adicionar um novo treinador
// const addTrainer = async (req, res, next) => {
//   try {
//     // criando uma constante para receber o conteúdo do corpo da requisição
//     const data = req.body
//     // executando o método da classe firestore que irá gravar o documento no banco
//     await firestore.collection('trainers').doc().set(data)
//     res.status(201).send('Treinador salvo com sucesso!')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// Criando o método para listar todos os treinadores
// const getAllTrainers = async (req, res, next) => {
//   try {
//     // criando um objeto para receber a coleção 'trainers'
//     const trainers = await firestore.collection('trainers')
//     // criando uma constante para receber os documentos da coleção
//     const data = await trainers.get()
//     // criando um array vazio que irá receber os treinadores
//     const trainersArray = []
//     // testando se há documentos ou não na coleção
//     if (data.empty) {
//       res.status(404).send('Não há treinadores cadastrados!')
//     } else {
//       data.forEach(doc => {
//         // para cada documento do banco será criando
//         // um novo objeto da classe 'Trainer'
//         const trainer = new Trainer(
//           doc.id,
//           doc.data().name,
//           doc.data().userName,
//           doc.data().email,
//           doc.data().password,
//           doc.data().birthDate,
//           doc.data().age,
//           doc.data().genre,
//           doc.data().city,
//           doc.data().state
//         )
//         trainersArray.push(trainer)
//       })
//       res.status(200).send(trainersArray)
//     }
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// Criando o método para listar um treinador específico
// const getTrainer = async (req, res, next) => {
//   try {
//     // criando um objeto para receber o parâmetro 'id' da requisição
//     const id = req.params.id
//     // criando um objeto para receber a consulta no 'firestore'
//     const trainer = await firestore.collection('trainers').doc(id)
//     // criando um objeto para receber o documento
//     const data = await trainer.get()
//     // testando se existe um documento
//     if (!data.exists) {
//       res
//         .status(404)
//         .send('Não foi encontrado um treinador com o ID informado!')
//     } else {
//       res.status(200).send(data.data())
//     }
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// Criando o método para atualizar um treinador específico
// const updateTrainer = async (req, res, next) => {
//   try {
//     // criando um objeto para receber o parâmetro 'id' da requisição
//     const id = req.params.id
//     // criando um objeto para receber o corpo da requisição
//     const data = req.body
//     // criando um objeto para receber a consulta no 'firestore'
//     const trainer = await firestore.collection('trainers').doc(id)
//     // realizando a atualização
//     await trainer.update(data)
//     res.status(201).send('Treinador atualizado com sucesso!')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// Criando o método para excluir um treinador específico
// const deleteTrainer = async (req, res, next) => {
//   try {
//     // criando um objeto para receber o parâmetro 'id' da requisição
//     const id = req.params.id
//     // realizando a exclusão do documento
//     await firestore.collection('trainers').doc(id).delete()
//     res.status(200).send('Treinador excluído com sucesso!')
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// module.exports = {
//   addTrainer,
//   getAllTrainers,
//   getTrainer,
//   updateTrainer,
//   deleteTrainer
// }
