'use strict'

const trainerRepository = require('../repositories/trainer-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const _repo = new trainerRepository()

function trainerController() {}

trainerController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe o seu nome')
  _validator.isRequired(req.body.userName, 'Informe o seu nome de usuário')
  _validator.isRequired(req.body.email, 'Informe o seu email')
  _validator.isEmail(req.body.email, 'O email informado é inválido')

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

module.exports = trainerController
