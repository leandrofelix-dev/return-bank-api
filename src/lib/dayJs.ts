import dayjs from 'dayjs'
import { saudacaoType } from '../@types/types'
import { Request, Response, NextFunction } from 'express'

export const actualDate = dayjs()
export const minBirthDateToCreateUser = actualDate
  .subtract(18, 'year')
  .format('DD-MM-YYYY')

export function getSalute(req: Request, res: Response) {
  const hour = dayjs().hour()

  let saudacao: saudacaoType

  if (hour >= 6 && hour < 12) {
    saudacao = 'Bom dia⛅'
  } else if (hour >= 12 && hour < 18) {
    saudacao = 'Boa tarde☀️'
  } else {
    saudacao = 'Boa noite🌙'
  }
  res.status(200).json({ msg: saudacao })
}
