const express=require('express')
const passport = require('passport')
const router=express.Router()
const userController = require('../controller/user_controller')


/* POST METHOD*/
router.post('/create',userController.createUser)

//BELLOW GIVEN CODE first authenticates the user and if authenticated, then call's the respective controller's module
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in',failureMessage:true}
    ),userController.createSession)


/* GET METHOD */
router.get('/sign-in',userController.signIn)
router.get('/sign-up',userController.signUp)
router.get('/sign-out',userController.destroySession)    


module.exports = router