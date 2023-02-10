import { body } from 'express-validator'

export const agencyCreateValidator = () => {
  return [
    body('address.state')
      .isString(),
    body('address.country')
      .isString(),
    body('address.street')
      .isString(),
    body('address.number')
      .isInt(),
    body('agency')
    .isInt()
      .withMessage('agency number is required'),
  ]
}
