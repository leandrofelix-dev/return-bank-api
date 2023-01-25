import {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/admController'
import { Router, Request, Response } from 'express'
import { validate } from '../middlewares/handleValidation'
import { userCreateValidator } from '../middlewares/validators/userValidation'
import { createAccount } from '../controllers/accountController'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API Working👨🏽‍🚀' })
  })

  .get('/user/:id', getUser)
  // .patch('deposit', cashDeposit)

  // ADM Querys
  /* Users */
  .post('/user', createUser, userCreateValidator(), validate)
  .get('/adm/users/', getAllUsers)
  .delete('/adm/delete/user/:id', deleteUser)

  /* Account */
  // .post('/account', createAccount, accountCreateValidator(), validate)
  // .get('/adm/account/', getAllAccounts)
  // .delete('/adm/delete/account/:id', deleteAccount)
