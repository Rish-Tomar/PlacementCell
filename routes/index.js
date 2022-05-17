const express=require('express')
const req = require('express/lib/request')

const router=express.Router()

const homeController=require('../controller/home_controller')

router.get('/',homeController.home)
router.use('/users',require('./user'))
router.use('/student',require('./student'))
router.use('/jobs',require('./jobs'))
router.use('/interview',require('./interview'))
module.exports = router