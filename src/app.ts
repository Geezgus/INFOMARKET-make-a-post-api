import express from 'express'
import { Server } from 'http'
import { AddressInfo } from 'net'
import cors from 'cors'

import indexRouter from './routes/index'
import postsRouter from './routes/posts'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', indexRouter)
app.use('/posts', postsRouter)

const port = process.env.PORT || 3333

export const listener = app.listen(port, function (this: Server) {
  console.log('listening on port', (this.address() as AddressInfo).port)
})
