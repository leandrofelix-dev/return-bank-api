export type AddressType = {
  state: string
  country: string
  street: string
  number: number | null
}

export type UserType = {
  id: string
  name: string
  birthDate: Date
  password: number
}

export type AccountType = 'checking' | 'savings' | 'international'
