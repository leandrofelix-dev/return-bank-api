import dayjs from 'dayjs'

export const actualDate = dayjs()
export const minBirthDateToCreateUser = actualDate
  .subtract(18, 'year')
  .format('DD-MM-YYYY')
