import { Request, Response, NextFunction } from 'express'
import { jwt } from '../index'

export async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado!' })
  }
  try {
    const secret = process.env.SECRET
    jwt.verify(token, secret)
    next()
  } catch (error: any) {
    console.log(`Error: ${error.message}`)
    res.status(500).json({ msg: 'Token de autenticação inválido!' })
  }
}
