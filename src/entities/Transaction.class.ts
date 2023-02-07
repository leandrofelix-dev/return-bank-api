import { Account } from "./Account.class"
import { User } from "./User.class"

export class Transaction {
  id
  recipient
  sender
  account
  cashValue

  constructor(
    id: string,
    recipient: User,
    sender: User,
    account: Account,
    cashValue: number
  ) {
    this.id = id
    this.account = account
    this.recipient = recipient
    this.sender = sender
    this.cashValue = cashValue
  }

  getTransaction() {
    return {
      id: this.id,
      recipient: this.recipient,
      sender: this.sender,
      account: this.account,
      cashValue: this.cashValue
    }
  }
}
