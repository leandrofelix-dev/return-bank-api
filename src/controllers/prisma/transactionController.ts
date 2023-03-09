import { Request, Response, NextFunction } from 'express'
import { prisma } from '../../lib/prisma'

export async function getTransaction(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transaction = await prisma.transaction.findMany({
      where: { id: data },
    })
    if (!transaction) {
      return res.status(404).json({ error: 'transaction not found' })
    }
    return res.status(200).json(transaction)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllTransactions(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transaction = await prisma.transaction.findMany()
    if (!transaction) {
      return res.status(404).json({ error: 'Dont have transactions' })
    }
    return res.status(200).json(transaction)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createTransaction(req: Request, res: Response, next: NextFunction) {
  const data = req.body
  try {
    const transaction = await prisma.transaction.create({
      data: {
        cash: data.cash,
        accountId: data.accountId,
        type: data.type,
        description: data.description,
      },
    })

     return next()
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}




export async function deleteTransaction(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transaction = await prisma.transaction.delete({
      where: { id: data },
    })
    return res.status(200).json(transaction)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function updateTransaction(req: Request, res: Response) {
  const data = req.body
  const id = req.params.id
  try {
    const transaction = await prisma.transaction.update({
      where: { id },
      data: {
        cash: data.cash,
        accountId: data.accountId,
        type: data.type,
      },
    })
    return res.status(200).json(transaction)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
