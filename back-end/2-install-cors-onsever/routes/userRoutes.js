const express = require("express")
const { getuserController } = require('../controllers/userController')

const router = express.Router()

router.get("/user",getuserController)

module.exports = router