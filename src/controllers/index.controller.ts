import { Request, Response } from 'express'

const controller = {
  findEndpoints: (req: Request, res: Response) => {
    const baseURL = `${req.protocol}://${req.get('host')}`

    const endpoints = {
      posts: `${baseURL}/posts`,
    }

    res.status(200).send(endpoints)
  },
}

export default controller
