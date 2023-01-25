import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import Logger from '../../config/logger'

export async function createAccount(req: Request, res: Response) {
  try {
    const data = req.body
    const user = await UserModel.create(data)

    return res.status(201).json({ added: user })
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}

/*
  DEPOSITO
  TRANSFERENCIA
  SAQUE
  CAMBIO
*/
