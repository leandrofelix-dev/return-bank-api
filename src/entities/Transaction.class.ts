import { Account } from './Account.class'
import { User } from './User.class'

export class Transaction {
  id
  private _account
  private _recipient
  private _sender
  private _cashValue

  constructor(
    id: string,
    _account: Account,
    _recipient: User,
    _sender: User,
    _cashValue: number,
  ) {
    this.id = id
    this._account = _account
    this._recipient = _recipient
    this._sender = _sender
    this._cashValue = _cashValue
  }

  public get account(): Account {
    return this._account
  }

  public get recipient(): User {
    return this._recipient
  }

  public get sender(): User {
    return this._sender
  }

  public get cashValue(): number {
    return this._cashValue
  }
}
