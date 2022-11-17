// definindo o strict mode
'use strict'

// realizando as importações
const express = require('express')
const controller = require('../controllers/trainerController')
const auth = require('../middlewares/authentication')

// inicializando as rotas do express
const router = express.Router()

// instanciando o objeto da classe trainerController
let _ctrl = new controller()

// definindo as rotas
router.post('/login', _ctrl.authenticate)
router.get('/', auth, _ctrl.get)
router.get('/:id', auth, _ctrl.getById)
router.post('/', auth, _ctrl.post)
router.put('/:id', auth, _ctrl.put)
router.delete('/:id', auth, _ctrl.delete)

// exportando o módulo
module.exports = {
  routes: router
}
