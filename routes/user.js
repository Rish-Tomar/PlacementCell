const express=require('express')

const router=express.Router()
const userController = require('../controller/user_controller')

// router.get('/',)

router.get('/sign-in',userController.signIn)
router.get('/sign-up',userController.signUp)
router.post('/create',userController.createUser)

module.exports = router