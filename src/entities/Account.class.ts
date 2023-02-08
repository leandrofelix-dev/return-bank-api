import { AccountType } from '../@types/types'

import { Transaction } from './Transaction.class'
import { User } from './User.class'

export class Account {
  id
  private _owner
  private _type
  private _cash
  private _transactions

  constructor(
    id: string,
    _type: AccountType,
    _owner: User,
    _cash: number,
    _transactions: Transaction[]

  ) {
    this.id = id
    this._type = _type
    this._owner = _owner
    this._cash = _cash
    this._transactions = _transactions
  }

  public get type(): AccountType {
    return this._type
  }

  public get owner(): User {
    return this._owner
  }

  public get cash(): number {
    return this._cash
  }

  public set cash(value: number) {
    this._cash = value
  }

  public get transactions(): Transaction[] {
    return this._transactions
  }
}
