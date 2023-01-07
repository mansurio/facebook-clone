const express = require("express")
const { registerUserController } = require('../controllers/userController')

const router = express.Router()

router.post("/register",registerUserController)

module.exports = router