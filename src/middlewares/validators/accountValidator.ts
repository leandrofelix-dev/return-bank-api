import { body } from 'express-validator'

export const accountCreateValidator = () => {
  return [
    body('type')
    .isString()
      .withMessage('type must be a string'),
    body('userId')
    .isString()
      .withMessage('userId is required'),
  ]
}
