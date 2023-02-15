/* eslint-disable import/first */
import express from 'express'
import router from './routes/router'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/api/', router)

app.listen(port, async () => {
  console.log(`Executando na porta: ${port} ✅`)
})
