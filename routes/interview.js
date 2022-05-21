const express=require('express')
const passport = require('passport')
const router=express.Router()
const interviewDetails= require('../controller/interview_controller')


/* GET METHOD */
router.get('/',passport.checkAuthentication,interviewDetails.InterviewHome)
router.get('/remove',interviewDetails.remove)
router.get('/details',interviewDetails.seeEachInterviewStudentsAssigned)


/* POST METHOD*/
router.post('/create',interviewDetails.createInterview)

//EXPORTING THE ROUTES
module.exports=router