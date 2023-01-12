import { Router, Request, Response } from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from '../controllers/movieControllers'
import { validate } from '../middlewares/handleValidation'
import { movieCreateValidator } from '../middlewares/movieValidation'

const router = Router()

router.get
  ('/test', (req: Request, res: Response) => {
  res.status(200).json({'msg': 'API Working!'})
})

export default router
  .get('/movie/:id', findMovieById)
  .get('/movies', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .post('/movie', movieCreateValidator(), validate, createMovie)
  .patch('/movie/:id', movieCreateValidator(), validate, updateMovie)
