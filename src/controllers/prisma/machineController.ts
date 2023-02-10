import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getMachine(req: Request, res: Response) {
  const data = req.params.id
  try {
    const machine = await prisma.cashMachine.findMany({
      where: { id: data }
    })
    if (!machine) { return res.status(404).json({ error: 'machine not found' }) }
    return res.status(200).json(machine)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllMachines(req: Request, res: Response) {
  const data = req.params.id
  try {
    const machine = await prisma.cashMachine.findMany()
    if (!machine) { return res.status(404).json({ error: 'Dont have machines' }) }
    return res.status(200).json(machine)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createMachine(req: Request, res: Response) {
  const data = req.body
  try {
    const machine = await prisma.cashMachine.create({
      data: {
        agencyId: data.agencyId,
        cash: 0
      }
    })
    return res.status(200).json(machine)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function deleteMachine(req: Request, res: Response) {
  const data = req.params.id
  try {
    const machine = await prisma.cashMachine.delete({
      where: { id: data }
    })
    return res.status(200).json(machine)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function updateMachine(req: Request, res: Response) {
  const data = req.body
  const id = req.params.id
  try {
    const machine = await prisma.cashMachine.update({
      where: { id: id },
      data: {
        agencyId: data.agencyId
      }
    })
    return res.status(200).json(machine)
  }
  catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
