import { body } from 'express-validator'

export const movieCreateValidator = () => {
  return [
    body("title")
      .isString()
        .withMessage("title: string")
      .isLength({ min: 5 })
      .withMessage("title.length >= 5"),

    body("rating")
      .isNumeric()
        .withMessage("rating: number")
      .custom(
        (value: number) => {
          if (value <= 0 || value >10) { throw new Error("rating > 0 && rating <= 10") }
          return true
        }),

    body("description")
      .isString()
        .withMessage("descrição é obrigatória"),

    body("director")
      .isString()
      .withMessage("diretor é obrigatório"),

    body("poster").isURL().withMessage("A imagem precisa ser uma URL")
  ]
}
