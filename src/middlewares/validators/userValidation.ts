import { body } from 'express-validator'

export const userCreateValidator = () => {
  return [
    body('name')
      .isString()
        .withMessage('Must be a string')
      .isLength({ min: 5 })
        .withMessage('Must be at least 5 chars long'),

    body('birthDate')
      .isDate({format: 'DD-MM-YYYY'})
        .withMessage('Must be a valid date2')
      .isBefore('05-02-2023')
        .withMessage('Must be a date after 05-02-2023'),

    body('password')
      .isString()
        .withMessage('Must be a string')
      .isLength({ min: 8 })
        .withMessage('Must be at least 8 chars long'),
  ]
}
