import express from 'express'
import { Server } from 'http'
import { AddressInfo } from 'net'

import indexRouter from './routes/index'

const app = express()
app.use(express.json())

app.use('/', indexRouter)

const port = process.env.PORT || 3333

export const listener = app.listen(port, function (this: Server) {
  console.log('listening on port', (this.address() as AddressInfo).port)
})
