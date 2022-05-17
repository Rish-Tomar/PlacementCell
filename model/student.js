const { type } = require('express/lib/response')
const mongoose = require('mongoose')


const studentSchema =new  mongoose.Schema({
    batch:{
        type:String,
        required:true
      },
    details:{
        name:{
            type:String,
            required:true},
        email:{
            type:String,
            required:true,
            unique:true},
        mobileNo:{
            type:Number,
            required:true},
        college:{
            type:String},
        status:{
            type:String}
      },
    Course_score:{
        DSA:{
            type:Number},
        WebD:{
            type:Number},
        React:{
            type:Number}

    },
    interviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Interview'
        }        
        ]  
})


const StudentData = mongoose.model('StudentData',studentSchema)

module.exports = StudentData