import { Request, Response } from 'express'
import { AddressInfo } from 'net'
import { listener } from '../app'

const controller = {
  findEndpoints: (req: Request, res: Response) => {
    const address = listener.address() as AddressInfo

    const endpoints = {}

    res.status(200).send(endpoints)
  },
}

export default controller
