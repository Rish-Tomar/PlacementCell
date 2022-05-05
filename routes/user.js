const express=require('express')

const router=express.Router()
const userController = require('../controller/user_controller')

// router.get('/',)

router.get('/sign-up',userController.signUp)

module.exports = router