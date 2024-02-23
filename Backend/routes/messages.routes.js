import express, { Router } from 'express'
import { getMessage, sendMessage } from '../controllers/messages.controllers.js'
import protectRoute from '../middleware/protectRoute.middleware.js'


const router = Router()

router.post("/send/:id", protectRoute, sendMessage)
router.get("/:id", protectRoute, getMessage)
//protectRoute is middleware which for checking the user is logged in or not
export default router