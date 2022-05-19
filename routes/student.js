const express=require('express')
const passport = require('passport')
const router=express.Router()
const studentController = require('../controller/student_record_controller')


/*ALL GET REQUESTS */
//checking if user is authentic or not if yes then only render student data page
router.get('/', passport.checkAuthentication, studentController.studentHomePage)
router.get('/student-input',studentController.studentInput)
router.get('/show-details/',studentController.showDetails)
router.get('/download',studentController.handleDownloadFileAsCsv)
router.get('/add-interview/',studentController.addInterview)


/* ALL POST REQUESTS*/
router.post('/create-student',studentController.createStudentRecord)


module.exports = router