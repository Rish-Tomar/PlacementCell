const express=require('express')

const router=express.Router()

const studentController = require('../controller/student_record_controller')

router.get('/',studentController.studentHomePage)
router.get('/student-input',studentController.studentInput)
router.post('/create-student',studentController.createStudentRecord)
router.get('/show-details/',studentController.showDetails)
router.get('/download',studentController.handleDownloadFileAsCsv)
module.exports = router