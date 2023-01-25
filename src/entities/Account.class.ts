import { AccountType, UserType } from '../@types/types'

export class Account {
  id
  type
  user
  cashReal
  cashDollar

  constructor(
    id: string,
    type: AccountType,
    user: UserType,
    cashReal: number,
    cashDollar: number) {
      this.id = id
      this.type = type
      this.user = user
      this.cashReal = cashReal
      this.cashDollar = cashDollar
  }
}
