import { AddressType } from '../@types/types'
import { CashMachine } from './CashMachine'

export class Agency {
  id
  private _address
  private _agencyNumber
  private _machines

  constructor(
    id: string,
    _address: AddressType,
    _agency: number,
    _machines: CashMachine[],
  ) {
    this.id = id
    this._address = _address
    this._agencyNumber = _agency
    this._machines = _machines
  }

  public get address(): AddressType {
    return this._address
  }

  public get agencyNumber(): number {
    return this._agencyNumber
  }

  public get machines(): CashMachine[] {
    return this._machines
  }

  public set cashMachines(newMachines: CashMachine[]) {
    this._machines = newMachines
  }
}
