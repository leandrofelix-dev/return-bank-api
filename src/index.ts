/* eslint-disable import/first */


import express from 'express'
const cors = require('cors')
import router from './routes/router'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
});
app.use('/api/', router)

app.listen(port, async () => {
  console.log(`Executando na porta: ${port} ✅`)
})
