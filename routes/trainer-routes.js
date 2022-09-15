// definindo o strict mode
'use strict'

// realizando as importações
const express = require('express')
const controller = require('../controllers/trainerController')

// inicializando as rotas do express
const router = express.Router()

// instanciando o objeto da classe trainerController
let _ctrl = new controller()

// definindo as rotas
router.get('/', _ctrl.get)
router.get('/:id', _ctrl.getById)
router.post('/', _ctrl.post)
router.put('/:id', _ctrl.put)
router.delete('/:id', _ctrl.delete)

// exportando o módulo
module.exports = router
