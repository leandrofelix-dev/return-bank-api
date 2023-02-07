import { createUser, deleteUser, getUser, getAllUsers } from '../controllers/userController'
import { Router, Request, Response } from 'express'
import { validate } from '../middlewares/handleValidation'
import { userCreateValidator } from '../middlewares/validators/userValidation'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API Working👨🏽‍🚀' })
  })
  .post('/user', userCreateValidator(), validate, createUser)
  .get('/user/:id', getUser)
  .get('/getAllUsers', getAllUsers)
  .delete('/user/:id', deleteUser)

  /* Account */
  // .post('/account', createAccount, accountCreateValidator(), validate)
  // .get('/adm/account/', getAllAccounts)
  // .delete('/adm/delete/account/:id', deleteAccount)
