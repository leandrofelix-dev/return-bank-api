import { body } from 'express-validator'

export const machineCreateValidator = () => {
  return [body('agencyId').isString().withMessage('agencyId is required')]
}
