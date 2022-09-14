// definindo o strict mode
'use strict'

// Definindo imports
const firebase = require('../db')
const Trainer = require('../models/trainer')
const firestore = firebase.firestore()

class trainerRepository {
    constructor(){}

    // O create será responsável por receboer do controller o 'req.body com os dados
        async create(data) {
            let trainer = data;
            let res = await firestore.collection('trainers').doc().set(data)
            return res
        }

        async update(id,data) {
            // criando um objeto para receber a consulta no 'firestore'
            let trainer = await firestore.collection('trainers').doc(id)
            // realizando a atualização
            let res = await trainer.update(data)
            return res
        }

        async getAll() {
            const trainers = await firestore.collection('trainers')
            // criando uma constante para receber os documentos da coleção
            let res = await trainers.get()
            return res 
        }

        async getById(id){
            let trainer = await firestore.collection('trainers').doc(id)
            let data = await trainer.get()
        }

        async delete(id){
            return await firestore.collection('tr')
        }
    
}