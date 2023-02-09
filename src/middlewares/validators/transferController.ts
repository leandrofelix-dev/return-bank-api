import { body } from 'express-validator'

export const userCreateValidator = () => {
  return [
    body('cash')
      .isFloat()
      .withMessage('Must be a float'),
    body('transactionId')
      .isString()
      .withMessage('Must be a string'),
    body('accountId')
      .isString()
        .withMessage('Must be a string')

  ]
}
