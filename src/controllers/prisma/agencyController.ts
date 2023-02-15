import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getAgency(req: Request, res: Response) {
  const data = req.params.id
  try {
    const agency = await prisma.agency.findMany({
      where: { id: data },
    })
    if (!agency) {
      return res.status(404).json({ error: 'agency not found' })
    }
    return res.status(200).json(agency)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function getAllAgencys(req: Request, res: Response) {
  const data = req.params.id
  try {
    const agency = await prisma.agency.findMany()
    if (!agency) {
      return res.status(404).json({ error: 'Dont have agencys' })
    }
    return res.status(200).json(agency)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function createAgency(req: Request, res: Response) {
  const data = req.body
  const address = data.address
  const addressFormated =
    `${address.state}-${address.country}-${address.street}-${address.number}`.toUpperCase()
  try {
    const agency = await prisma.agency.create({
      data: {
        address: addressFormated,
        agency: data.agency,
      },
    })
    return res.status(200).json(agency)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function deleteAgency(req: Request, res: Response) {
  const data = req.params.id
  try {
    const agency = await prisma.agency.delete({
      where: { id: data },
    })
    return res.status(200).json(agency)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}

export async function updateAgency(req: Request, res: Response) {
  const data = req.body
  const id = req.params.id
  try {
    const agency = await prisma.agency.update({
      where: { id },
      data: {
        address: data.address,
        agency: data.agency,
      },
    })
    return res.status(200).json(agency)
  } catch (e: any) {
    console.log(`Error: ${e.message}`)
  }
}
