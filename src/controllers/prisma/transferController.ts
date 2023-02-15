import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getTransfer(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transfer = await prisma.transfer.findMany({
      where: { id: data },
    })
    if (!transfer) {
      return res.status(404).json({ error: 'transfer not found' })
    }
    return res.status(200).json(transfer)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllTransfers(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transfer = await prisma.transfer.findMany()
    if (!transfer) {
      return res.status(404).json({ error: 'Dont have transfers' })
    }
    return res.status(200).json(transfer)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createTransfer(req: Request, res: Response) {
  const data = req.body
  try {
    const transfer = await prisma.transfer.create({
      data: {
        cash: data.cash,
        transactionId: data.transactionId,
        accountId: data.accountId,
      },
    })
    return res.status(200).json(transfer)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function deleteTransfer(req: Request, res: Response) {
  const data = req.params.id
  try {
    const transfer = await prisma.transfer.delete({
      where: { id: data },
    })
    return res.status(200).json(transfer)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function updateTransfer(req: Request, res: Response) {
  const data = req.body
  const id = req.params.id
  try {
    const transfer = await prisma.transfer.update({
      where: { id },
      data: {
        cash: data.cash,
        transactionId: data.transactionId,
        accountId: data.accountId,
      },
    })
    return res.status(200).json(transfer)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
