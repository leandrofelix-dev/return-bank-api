import { Account } from './Account.class';
export class CashMachine {
  id
  private _cash

  constructor(
    id: string,
    _cash: number

    ) {
    this.id = id
    this._cash = _cash
  }

  public get cash(): number {
    return this._cash
  }

  public set cash(newCash: number) {
    this._cash = newCash
  }

  public addCash(account: Account, cash: number): void {
    this._cash += cash
  }

  public transferCash(rece: Account, cash: number): void {
    this._cash += cash
  }
}
