import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'
import { bcrypt, jwt } from '../..'

export async function getUser(req: Request, res: Response) {
  const data = req.params.id
  try {
    const user = await prisma.user.findMany({
      where: { id: data },
    })
    if (!user) {
      return res.status(404).json({ error: 'user not found' })
    }
    return res.status(200).json(user)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllUsers(req: Request, res: Response) {
  const data = req.params.id
  try {
    const user = await prisma.user.findMany()
    if (!user) {
      return res.status(404).json({ error: 'Dont have users' })
    }
    return res.status(200).json(user)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createUser(req: Request, res: Response) {
  const data = req.body
  const { password } = data

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        birthDate: `${data.birthDate}T00:00:00.000Z`,
        password: passwordHash,
      },
    })
    return res.status(200).json(user)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function login(req: Request, res: Response) {
  const data = req.body

  const { id } = data
  const { password } = data

  const user = await prisma.user.findUnique({ where: { id } })
  const passwordMatch = await bcrypt.compare(password, user?.password)

  if (!user) {
    return res.status(404).json({ error: 'usuário não encontrado!' })
  }
  if (!passwordMatch) {
    return res.status(422).json({ error: 'Senha inválida!' })
  }

  try {
    const secret = process.env.SECRET
    const token = jwt.sign({ id: user.id }, secret)
    res.status(200).json({
      msg: 'Autenticação realizada com sucesso!',
      token,
    })
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
    res.json({ error: 'Ocorreu um erro interno' })
  }
}

export async function goToHome(req: Request, res: Response) {
  const id = req.params.id

  const user = await prisma.user.findUnique({ where: { id } })
  const accounts = await prisma.account.findMany({
    where: { userId: id },
    include: { owner: true },
  })

  if (!user) {
    return res.status(404).json({ error: 'usuário não encontrado!' })
  }
  const { name } = user

  try {
    res.json({ name, accounts })
  } catch (e: any) {
    res.json({ error: 'Ocorreu um erro interno' })
  }
}

export async function deleteUser(req: Request, res: Response) {
  const data = req.params.id
  try {
    const user = await prisma.user.delete({
      where: { id: data },
    })
    return res.status(200).json(user)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function updateUser(req: Request, res: Response) {
  const data = req.body
  const id = req.params.id
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        birthDate: `${data.birthDate}T00:00:00.000Z`,
        password: data.password,
      },
    })
    return res.status(200).json(user)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
