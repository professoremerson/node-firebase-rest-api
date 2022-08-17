// definindo o strict mode do js
'use strict'

// realizando as importações
const dotenv = require('dotenv')
const assert = require('assert')

// configurando o dotenv
dotenv.config()

// criando o bjeto que ira conter as variaveis do ambiente
const{
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMANIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

//definindo obrigatoriedade de parametros
assert(PORT,'PORT is required')
assert(HOST,'HOST is required')

//exportando o modulo
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig : {
        apiKey: API_KEY,
        authDomain: AUTH_DOMANIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      }
}