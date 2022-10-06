// Definindo os 'imports'
const repBase = require('../bin/base/repository-base')

class trainerRepository {
  constructor() {
    this._repBase = new repBase('trainer', 'trainers')
  }

  async create(data) {
    return await this._repBase.create(data)
  }

  async update(id, data) {
    return await this._repBase.update(id, data)
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
}
module.exports = trainerRepository
