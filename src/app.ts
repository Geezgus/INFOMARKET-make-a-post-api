import express from 'express'
import { Server } from 'http'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
const port = process.env.PORT || 3333

app.listen(port, function (this: Server) {
  console.log('listening on port', (this.address() as AddressInfo).port)
})
