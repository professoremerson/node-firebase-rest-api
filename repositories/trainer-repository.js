const repBase = require('../bin/base/repository-base')

class trainerRepository {
  constructor() {
    this._repBase = new repBase('trainer', 'trainers')
  }

  async create(data) {
    let trainerCreated = await this._repBase.create(data)
    return this._repBase.getById(trainerCreated.id)
  }

  async update(id, data) {
    let trainerUpdated = await this._repBase.update(id, {
      name: data.name,
      age: data.age,
      city: data.city,
      state: data.state
    })
    return this._repBase.getById(trainerUpdated.id)
  }

  async getAll() {
    return await this._repBase.GetAll()
  }

  async getById(id) {
    return await this._repBase.getById(id)
  }

  async delete(id) {
    return await this._repBase.delete(id)
  }
}

module.exports = trainerRepository
