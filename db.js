//definindo imports
const firebase = require('firebase')
const config = require('./config')

// Iniciando o firebase
const db = firebase.initializaApp(config.firebaseConfig)

//exportando o modulo
module.exports = db