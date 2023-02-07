import { Account } from "./Account.class"

export class User {
  id
  name
  birthDate
  password
  accounts

  constructor(
    id: string,
    name: string,
    birthDate: Date,
    password: number,
    accounts: Account[]
  ){
    this.id = id
    this.name = name
    this.birthDate = birthDate
    this.password = password
    this.accounts = accounts
  }

  authentication(password: number) {
    // Código aqui
  }
}
