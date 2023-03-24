import { Router } from 'express'
import controller from '../controllers/index.controller'

const router = Router()

router.get('/', controller.findEndpoints)

export default router
