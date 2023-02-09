import { body } from 'express-validator'
import { minDateToCreateUser } from '../../lib/dayJs'

export const userCreateValidator = () => {
  return [
    body('name')
      .isString()
        .withMessage('Must be a string')
      .isLength({ min: 5 })
        .withMessage('Must be at least 5 chars long'),

    body('birthDate')
      .isDate({ format: 'YYYY-MM-DD' })
        .withMessage('Must be a valid date')
      .isBefore(`${minDateToCreateUser}`)
        .withMessage(`Must be a date after ${minDateToCreateUser}`),

    body('password')
      .isString()
        .withMessage('Must be a string')
      .isLength({ min: 8 })
        .withMessage('Must be at least 8 chars long'),
  ]
}
