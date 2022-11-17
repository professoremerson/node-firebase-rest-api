'use strict'

const trainerRepository = require('../repositories/trainer-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new trainerRepository()

function trainerController() {}

trainerController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o seu nome')
  _validator.isRequired(req.body.userName, 'Informe o seu nome de usuário')
  _validator.isRequired(req.body.email, 'Informe o seu email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.password, 'Informe a sua senha')

  req.body.password = md5(req.body.password)

  ctrlBase.post(_repo, _validator, req, res)
}

trainerController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o seu nome')
  _validator.isRequired(req.body.userName, 'Informe o seu nome de usuário')
  _validator.isRequired(req.body.email, 'Informe o seu email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')

  ctrlBase.put(_repo, _validator, req, res)
}

trainerController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

trainerController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

trainerController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}

trainerController.prototype.authenticate = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.email, 'Informe o seu email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')
  _validator.isRequired(req.body.password, 'Informe a sua senha')

  if (!_validator.isValid()) {
    res.status(400).send({
      message: 'Não foi possível efetuar o Login!',
      validation: _validator.errors()
    })
  }

  let trainer = await _repo.authenticate(req.body.email, req.body.password)
  //console.log(trainer)
  if (trainer) {
    res.status(200).send({
      trainer: trainer,
      token: jwt.sign(
        {
          user: trainer
        },
        config.secretKey
      )
    })
  } else {
    res.status(404).send({
      message: 'Usuário e senha inválidos!'
    })
  }
}

module.exports = trainerController
