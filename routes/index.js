/* THIS IS MAIN FILE DEFINING ROUTES */

const express=require('express')
const router=express.Router()
const homeController=require('../controller/home_controller')

/* DEFINING ROUTES*/
router.get('/',homeController.home)

//CALLING OTHER ROUTES AS IMPORTS
router.use('/users',require('./user'))
router.use('/student',require('./student'))
router.use('/jobs',require('./jobs'))
router.use('/interview',require('./interview'))
module.exports = router