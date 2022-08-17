//Definindo o strict mode do JS
'use strict'

//Definindo imports
const express = require('express')
const cors = require('cors')
const config = require('./config')

// Definindo a utilização de JSON no corpo da requisição
// (Body Parser)
app.use(express.json())

// Definindo a utilização do CORS
// (frontend)
app.use(cors())

//Definindo a porta onde o servidor estará ouvindo
app.listen(config.port, () => console.log('API está ouvindo em https://localhost:' + config.port))

/*
// Definindo imports
const express = require('express')
const cors = require('cors')
const firebase = require('firebase')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDu3_f8ha8ds-8w3fbcKuEoeyPErWRjxIk',
  authDomain: 'node-firebase-rest-api-501f1.firebaseapp.com',
  projectId: 'node-firebase-rest-api-501f1',
  storageBucket: 'node-firebase-rest-api-501f1.appspot.com',
  messagingSenderId: '773395764473',
  appId: '1:773395764473:web:ea379d8385ab26df023e28'
}

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig)

// Inicializando o Express
const app = express()

// Definindo a utilização de JSON no corpo da requisição
// (Body Parser)
app.use(express.json())

// Definindo a utilização do CORS
// (frontend)
app.use(cors())

// Definindo o tipo de banco de dados
const db = firebase.firestore()

// Defindo a coleção do banco de dados
const User = db.collection('users')

// Criando uma rota para teste
// app.get('/', (req, res) => {
//   // Enviando uma resposta para a requisição
//   res.status(200).send({
//     msg: 'Hellow World!'
//   })
// })

/**
 * Definindo as rotas para o CRUD
 * (sem definição recursos!!!)
 */
/*
// Recuperando todos os documentos da coleção
app.get('/', async (req, res) => {
  // a constante snapshot irá receber o resultado da busca na coleção "Users"
  const snapshot = await User.get()
  console.log(snapshot)
  // criando o objeto que irá receber o JSON com os documentos do banco
  const users = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  console.log(users)
  // enviando para o usuário a resposta da requisição
  res.send(users)
})

// Recuperando um documento específico na coleção
app.get('/:id', async (req, res) => {
  // criando uma contante para receber o parâmetro ID que está vindo na requisição
  const id = req.params.id
  // a constante snapshot irá receber o resultado da busca na coleção "Users"
  const snapshot = await User.get()
  // criando o objeto que irá receber o JSON com os documentos do banco
  const users = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  // filtrando dentro do retorno do banco para encontrar o documento com o id enviado por parâmetro
  const user = users.filter(u => {
    return u.id == id
  })
  // enviando a resposta da requisição
  res.send(user)
})

// Salvando um documento na coleção
app.post('/', async (req, res) => {
  // armazenando o corpo da requisição em um objeto
  const data = req.body
  console.log(data)
  // inserindo o objeto 'data' na coleção
  await User.add(data)
  // enviando uma resposta para a requisição
  res.status(201).send({
    msg: 'Usuário salvo!'
  })
})

// Atualizando um documento na coleção
app.put('/:id', async (req, res) => {
  // criando uma contante para receber o parâmetro ID que está vindo na requisição
  const id = req.params.id
  // chamando o método update() do Firebase para o documento que possui o ID informado como parâmetro
  await User.doc(id).update(req.body)
  // enviando uma resposta para a requisição
  res.send({
    msg: 'Usuário alterado!'
  })
})

// Excluindo um documento na coleção
app.delete('/:id', async (req, res) => {
  // criando uma contante para receber o parâmetro ID
  // que está vindo na requisição
  const id = req.params.id
  // chamando o método delete do Firebase para o documento que possui o ID informado como parâmetro
  await User.doc(id).delete()
  // enviando uma resposta para a requisição
  res.send({
    msg: 'Usuário Excluído!'
  })
})

// Definindo a porta onde o servidor estará ouvindo
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})

*/
