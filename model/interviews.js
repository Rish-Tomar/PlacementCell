const mongoose = require('mongoose')

const InterviewSchema = new mongoose.Schema({
    companyName:{
        type:String
    },
    date:{
        type:String
    },
    requirement:{
        type:String
    },
    jobId:{
        type:String
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'StudentData'
        }
    ]
})


const Interview = mongoose.model('Interview',InterviewSchema)

module.exports = Interview