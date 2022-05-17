const express=require('express')

const router=express.Router()
const interviewDetails= require('../controller/interview_controller')

router.get('/',interviewDetails.InterviewHome)
router.post('/create',interviewDetails.createInterview)
router.get('/remove',interviewDetails.remove)

module.exports=router