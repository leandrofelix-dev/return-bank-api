import { addressType } from '../@types/types'

export class Agency {
  id
  address
  agencyNumber

  constructor(id: string, address: addressType, agency: number) {
    this.id = id
    this.address = address
    this.agencyNumber = agency
  }
}
