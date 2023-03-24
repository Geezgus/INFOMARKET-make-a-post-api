import { Request, Response } from 'express'
import { ZodError } from 'zod'
import { prisma } from '../lib/prismaClient'
import validator from '../validators/postsValidator'

const controller = {
  findAll: async (_req: Request, res: Response) => {
    try {
      const posts = await prisma.posts.findMany({
        select: {
          title: true,
          content: true,
          author: true,
        },
      })

      return res.status(200).send(posts)
    } catch (err) {
      return res.sendStatus(500)
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const post = validator.parse(req.body)
      await prisma.posts.create({ data: post })

      return res.sendStatus(200)
    } catch (err) {
      if (err instanceof ZodError) return res.sendStatus(400)

      return res.sendStatus(500)
    }
  },
}

export default controller
