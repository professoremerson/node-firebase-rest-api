//definindo imports
const firebase = require('firebase')
const config = require('./config')

// Iniciando o firebase
const db = firebase.initializeApp(config.firebaseConfig)

//exportando o modulo
module.exports = db