// definindo o strict mode
'use strict'

//definindo imports
const expres = require('express')
const cors = require('cors')
const config = require('./config')

// Inicializando o Express
const app = expres()

// Definindo a utilização do JSON no corpo da requisição
// (Body Parser)
app.use(expres.json())

// Definindo a utilização do CORS
// (frontend)
app.use(cors())

//definindo a porta onde o servidor estara ouvindo
app.listen(config.port, ()  => console.log('API está rodando em http://localhost' + config.port))


/*
// Definindo imports
const expres = require('express')
const cors = require('cors')
const firebase = require('firebase')
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwM-9xu7WnXWF_YGGFFXRferiK0hw-2HM",
    authDomain: "node-firebase-rest-api-d541b.firebaseapp.com",
    projectId: "node-firebase-rest-api-d541b",
    storageBucket: "node-firebase-rest-api-d541b.appspot.com",
    messagingSenderId: "595582935223",
    appId: "1:595582935223:web:3ee297f0ef4259bebeed32",
    measurementId: "G-JGZ5YR4PVT"
  }

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializando o Express
const app = expres()

// Definindo a utilização do JSON no corpo da requisição
// (Body Parser)
app.use(expres.json())

// Definindo a utilização do CORS
// (frontend)
app.use(cors())

// Definindo o tipo de banco de dados
const db = firebase.firestore()

// Definindo a coleção do banco de dados
const User = db.collection('users')

// Rota para teste
//app.get("/",(req,res) => {
  // Enviando uma resposta para a requisição
 // res.send({
 //   msg: "Hellow World!"
//  });
//});

/**
 * Definindo as rotas para o CRUD
 * (Sem definição de recursos!!!)
 */
/*
// Recuperando todos os documentos da coleção
app.get("/", async (req,res) => {
  // A constante snapshot ir[a receber o resultado da busca
  // Na coleção "Users"
  const snapshot = await User.get()
  console.log(snapshot)
  // criando o objeto que irá receber o json com os documentos do banco
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })); 
  console.log(users)
  // enviando para o usuario a resposta da requisição
  res.send(users)
})

//recuperando um documento especifico na coleção
app.get("/:id", async (req,res) => {
  const id = req.params.id
  // A constante snapshot ir[a receber o resultado da busca
  // Na coleção "Users"
  const snapshot = await User.get()
  // criando o objeto que irá receber o json com os documentos do banco
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  // filtrando dentro do retorno do banco para encontrar o documento com o id enviado por parametro
  const user = users.filter(u => {
    return u.id == id
  })
  //enviado a resposta da requisição
  res.send(user)
})

//salvando um documento na coleção
app.post("/", async (req,res) => {
  // armazenando o corpo da requisição em um objeto
  const data = req.body
  console.log(data)
  //inserindo o objto 'data' na coleção
  await User.add(data)
  //enviando uma resposta para a requisição
  res.status(201).send({
    msg: "Usuário salvo!"
  })
})

//
app.put("/:id", async (req,res) => {
  const id = reqparams.id
  await User.doc(id).update(req.body)
  res.send({
    msg: "Usuário alterado!!"
  })
})

app.delete("/:id", async (req,res) =>{
  const id = req.params.id
  await User.doc(id).delete()
  res.send({
    msg: "Usuário Excluído!!"
  })
})

// Definindo a porta onde o servidor estará ouvindo
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})
*/
