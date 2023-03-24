import { Router } from 'express'
import controller from '../controllers/posts.controller'

const router = Router()

router.get('/', controller.findAll)
router.post('/', controller.create)

export default router
