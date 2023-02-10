import { Account } from './Account.class';
import { Agency } from './Agency.class';
export class CashMachine {
  id
  private _agency
  private _cash

  constructor(
    id: string,
    _cash: number,
    _agency: Agency

    ) {
    this.id = id
    this._cash = _cash
    this._agency = _agency
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
