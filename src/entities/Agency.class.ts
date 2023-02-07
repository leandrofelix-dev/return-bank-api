import { AddressType } from '../@types/types'
import { CashMachine } from './CashMachine'

export class Agency {
  id
  address
  agencyNumber
  machines

  constructor(
    id: string,
    address: AddressType,
    agency: number,
    machines: CashMachine[]
  ) {
    this.id = id
    this.address = address
    this.agencyNumber = agency
    this.machines = machines
  }
}
