export class User {
  id
  name
  birthDate
  password

  constructor(id: string, name: string, birthDate: Date, password: number) {
    this.id = id
    this.name = name
    this.birthDate = birthDate
    this.password = password
  }

  authentication(password: number) {
    // Código aqui
  }
}
