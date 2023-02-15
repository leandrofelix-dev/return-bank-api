import { body } from 'express-validator'

export const transactionCreateValidator = () => {
  return [
    body('cash').isFloat().withMessage('cash is required'),
    body('accountId').isString().withMessage('accountId is required'),
    body('type').isString().withMessage('type is required'),
  ]
}
