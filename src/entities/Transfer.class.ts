import { Transaction } from './Transaction.class'
import { User } from './User.class'

export class Transfer {
  id
  private _senderTransaction
  private _receiver
  private _cash

  constructor(
    id: string,
    _senderTransaction: Transaction,
    _receiver: User,
    _cash: number,
  ) {
    this.id = id
    this._senderTransaction = _senderTransaction
    this._receiver = _receiver
    this._cash = _cash
  }

  public get senderTransaction(): Transaction {
    return this._senderTransaction
  }

  public get receiver(): User {
    return this._receiver
  }

  public get cash(): number {
    return this._cash
  }
}
