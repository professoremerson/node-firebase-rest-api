//Definindo os imports
const firebase = require('firebase')
const config = require('./config')

//iniciando o firebase
const db = firebase.initializeApp(config.firebaseConfig)

//Exportando o modulo
module.exports = db
