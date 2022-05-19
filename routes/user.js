const express=require('express')
const passport = require('passport')
const router=express.Router()
const userController = require('../controller/user_controller')

// router.get('/',)

router.get('/sign-in',userController.signIn)
router.get('/sign-up',userController.signUp)
router.post('/create',userController.createUser)
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in',failureMessage:true}
    ),userController.createSession)

router.get('/sign-out',userController.destroySession)    


module.exports = router