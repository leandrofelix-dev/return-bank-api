import { Date } from "mongoose"
import { Account } from "./Account.class"

export class User {
  id
  private _name
  private _birthDate
  private _password
  private _accounts

  constructor(
    id: string,
    _name: string,
    _birthDate: Date,
    _password: string,
    _accounts: Account[]
  ){
    this.id = id
    this._name = _name
    this._birthDate = _birthDate
    this._password = _password
    this._accounts = _accounts
  }

  public get name(): string {
    return this._name
  }

  public get birthDate(): Date {
    return this._birthDate
  }

  public get password(): string {
    return this._password
  }

  public set password(newPassword: string) {
    this._password = newPassword
  }

  public get accounts(): Account[] {
    return this._accounts
  }

  public set accounts(newAccounts: Account[]) {
    this._accounts = newAccounts
  }
}
