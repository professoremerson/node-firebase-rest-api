//Definindo o strict mode do JS
'use strict'

//realizando as importações
const dotenv = require('dotenv')
const assert = require('assert')

//configurando o dotenv
dotenv.config()

//criando a constante com as variaveis de ambiante
const{
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    AOO_ID
} = process.env
//Definindo obrigatoriedade de parametros
assert(PORT, 'PORT is required!')
assert(HOST, 'ROST is required!')

//exportando o modulo
module.exports ={
    port: PORT,
    host: HOST,
    host_url: HOST_URL,
    irebaseConfig:{
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      }
}
