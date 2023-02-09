import { Router, Request, Response } from 'express'
import { validate } from '../middlewares/handleValidation'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/prisma/userController'
import { createAccount, deleteAccount, getAccount, getAllAccounts, updateAccount } from '../controllers/prisma/accountController'
import { createTransaction, deleteTransaction, getTransaction, getAllTransactions, updateTransaction } from '../controllers/prisma/transactionController'
import { createTransfer, deleteTransfer, getTransfer, getAllTransfers, updateTransfer } from '../controllers/prisma/transferController'

import { userCreateValidator } from '../middlewares/validators/userValidator'
import { accountCreateValidator } from '../middlewares/validators/accountValidator'
import { transactionCreateValidator } from '../middlewares/validators/transactionValidator'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API Working👨🏽‍🚀' })
  })

  /* User */
  .get('/user/:id', getUser)
  .get('/getAllUsers', getAllUsers)
  .post('/user', userCreateValidator(), validate, createUser)
  .delete('/user/:id', deleteUser)
  .patch('/user/:id', updateUser)

  /* Account */
  .get('/account/:id', getAccount)
  .get('/getAllAccounts', getAllAccounts)
  .post('/account', accountCreateValidator(), validate, createAccount)
  .delete('/account/:id', deleteAccount)
  .patch('/account/:id', updateAccount)

  /* Transaction */
  .get('/transaction/:id', getTransaction)
  .get('/getAllTransactions', getAllTransactions)
  .post('/transaction', transactionCreateValidator(), validate, createTransaction)
  .delete('/transaction/:id', deleteTransaction)
  .patch('/transaction/:id', updateTransaction)

/* Transfer */
  .get('/transfer/:id', getTransfer)
  .get('/getAllTransfers', getAllTransfers)
  .post('/transfer', transactionCreateValidator(), validate, createTransfer)
  .delete('/transfer/:id', deleteTransfer)
  .patch('/transfer/:id', updateTransfer)
  /* Agency */
  /* CashMachine */
