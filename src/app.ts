/* eslint-disable import/first */
require('dotenv').config()

import express from 'express'
import config from 'config'
import router from './routes/router'
import Logger from '../config/logger'
import morganMiddleware from './middlewares/morganMiddleware'
import db from '../config/db'

const app = express()
const port = config.get<number>('port')

app.use(express.json())
app.use(morganMiddleware)
app.use('/api/', router)

app.listen(port, async () => {
  await db()
  Logger.info(`Executando na porta: ${port} ✅`)
})
