const express=require('express')

const router=express.Router()

const jobsController = require('../controller/jobs_api_controller')


router.get('/jobs-api',jobsController.jobsApi)

module.exports = router