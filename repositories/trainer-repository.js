// Definindo os 'imports'
const repBase = require('../bin/base/repository-base')
const firebase = require('../db')
const firestore = firebase.firestore()
const md5 = require('md5')

class trainerRepository {
  constructor() {
    this._repBase = new repBase('trainer', 'trainers')
  }

  async create(data) {
    return await this._repBase.create(data)
  }

  async update(id, data) {
    return await this._repBase.update(id, {
      name: data.name,
      age: data.age,
      city: data.city,
      state: data.state
    })
  }

  async getAll() {
    return await this._repBase.getAll()
  }

  async getById(id) {
    return await this._repBase.getById(id)
  }

  async delete(id) {
    return await this._repBase.delete(id)
  }

  async authenticate(email, password) {
    let _hashPassword = md5(password)
    const trainer = await firestore
      .collection('trainers')
      .where('email', '==', email)
      .where('password', '==', _hashPassword)
      .get()
    return trainer
  }
}

module.exports = trainerRepository
