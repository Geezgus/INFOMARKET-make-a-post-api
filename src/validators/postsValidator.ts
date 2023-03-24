import { z } from 'zod'

const validator = z.object({
  title: z.string().min(1).max(60),
  content: z.string().min(1).max(280),
  author: z.string().min(1).max(20).optional(),
})

export default validator
