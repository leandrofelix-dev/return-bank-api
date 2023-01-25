import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import Logger from '../../config/logger'

export async function createUser(req: Request, res: Response) {
  try {
    const data = req.body
    const user = await UserModel.create(data)

    return res.status(201).json({ added: user })
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    return res.status(200).json(user)
  } catch (e: any) {
    Logger.error(`Error: ${e.message}`)
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await UserModel.find()
    return res.status(200).json(users)
  } catch (e: any) {
    return res.status(404).json({ error: 'internal error' })
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)

    if (!user) {
      return res.status(404).json({ error: 'filme não encotrado' })
    }

    await user.delete()
    return res.status(200).json({ msg: 'usuário removido com sucesso!' })
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body
    const movie = await UserModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: 'filme não encotrado' })
    }

    await UserModel.updateOne({ _id: id }, data)

    return res.status(200).json(data)
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}
