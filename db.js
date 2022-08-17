// Definindo imports
const firebase = require('firebase')
const config = require('./config')

// Inicializando o firebase
const db = firebase.initializeApp(config.firebaseConfig)

// Exportando o módulo
module.exports = db
