import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getUser(req: Request, res: Response) {
  const data = req.params.id
  try {
    const user = await prisma.user.findMany({
      where: { id: data }
    })
    if (!user) { return res.status(404).json({ error: 'user not found' }) }
    return res.status(200).json(user)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllUsers(req: Request, res: Response) {
  const data = req.params.id
  try {
    const user = await prisma.user.findMany()
    if (!user) { return res.status(404).json({ error: 'Dont have users' }) }
    return res.status(200).json(user)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createUser(req: Request, res: Response) {
  const data = req.body
  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        birthDate: `${data.birthDate}T00:00:00.000Z`,
        password: data.password
      }
    })
    return res.status(200).json(user)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
