const express=require('express')
const passport = require('passport')
const router=express.Router()
const interviewDetails= require('../controller/interview_controller')

router.get('/',passport.checkAuthentication,interviewDetails.InterviewHome)
router.post('/create',interviewDetails.createInterview)
router.get('/remove',interviewDetails.remove)

module.exports=router