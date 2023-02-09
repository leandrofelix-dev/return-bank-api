import dayjs from 'dayjs'

export let actualDate = dayjs()
export let minBirthDateToCreateUser = actualDate.subtract(18, 'year').format('DD-MM-YYYY')
