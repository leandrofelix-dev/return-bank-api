import { Request, Response } from 'express'
import { accountModel } from '../models/Account'
import Logger from '../../config/logger'

export async function createAccount(req: Request, res: Response) {
  try {
    const data = req.body
    const cash = await accountModel.create(data)
    return res.status(201).json({ added: user })
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}
