// Definindo a classe Trainer
class Trainer {
  // Implementando o construtor da classe
  constructor(
    id,
    name,
    userName,
    email,
    password,
    birthDate,
    age,
    genre,
    city,
    state
  ) {
    this.id = id
    this.name = name
    this.userName = userName
    this.email = email
    this.password = password
    this.birthDate = birthDate
    this.age = age
    this.genre = genre
    this.city = city
    this.state = state
  }
}

module.exports = Trainer
