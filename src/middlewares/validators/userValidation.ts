import { body } from 'express-validator'

export const userCreateValidator = () => {
  return [
    body('name')
      .isString()
        .withMessage('name: string')
      .isLength({ min: 5 })
        .withMessage('name.length >= 5'),

    // body('rating')
    //   .isNumeric()
    //   .withMessage('rating: number')
    //   .custom((value: number) => {
    //     if (value <= 0 || value > 10) {
    //       throw new Error('rating > 0 && rating <= 10')
    //     }
    //     return true
    //   }),

    // body('description').isString().withMessage('descrição é obrigatória'),

    // body('director').isString().withMessage('diretor é obrigatório'),

    // body('poster').isURL().withMessage('A imagem precisa ser uma URL'),
  ]
}
