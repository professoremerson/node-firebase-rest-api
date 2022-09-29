// definindo a utilização do 'strict' mode
'use strict'

// Definindo os 'imports'
const firebase = require('../../db')
const firestore = firebase.firestore()

class repositoryBase {
  constructor(model, collection) {
    this._model = model
    this._collection = collection
  }

  modelBase = require('../../models/' + this._model)

  async create(data) {
    let res = await firestore.collection(this._collection).doc().set(data)
    return res
  }

  async update(id, data) {
    let doc = await firestore.collection(this._collection).doc(id)
    let res = await doc.update(data)
    return res
  }

  async getAll() {
    let col = await firestore.collection(this._collection)
    let res = await col.get()
    let docArray = []
    if (res.empty) {
      return 'Não foram encontrados documentos!'
    } else {
      docArray = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return docArray
    }
  }

  async getById(id) {
    let doc = await firestore.collection(this._collection).doc(id)
    let res = await doc.get()
    if (!res.exists) {
      return 'Não foi encontrado um documento correspondente ao ID informado!'
    } else {
      return res.data()
    }
  }

  async delete(id) {
    return await firebase.collection(this._collection).doc(id).delete()
  }
}

module.exports = repositoryBase
