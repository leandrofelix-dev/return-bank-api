export class CashMachine {
  id
  isAutenticated
  constructor(id: string, isAutenticated: boolean) {
    this.id = id
    this.isAutenticated = isAutenticated
  }
}
