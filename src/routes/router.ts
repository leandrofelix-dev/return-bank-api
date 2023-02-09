// import { createUser, deleteUser, getUser, getAllUsers } from '../controllers/prisma/userController'
import { Router, Request, Response } from 'express'
import { validate } from '../middlewares/handleValidation'
import { userCreateValidator } from '../middlewares/validators/userValidation'
import { createUser, getAllUsers, getUser } from '../controllers/prisma/userController'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API Working👨🏽‍🚀' })
  })
  .get('/user/:id', getUser)
  .get('/getAllUsers', getAllUsers)
  .post('/user', userCreateValidator(), validate, createUser)
  // .delete('/user/:id', deleteUser)

  /* Account */
  // .post('/account', createAccount, accountCreateValidator(), validate)
  // .get('/adm/account/', getAllAccounts)
  // .delete('/adm/delete/account/:id', deleteAccount)
