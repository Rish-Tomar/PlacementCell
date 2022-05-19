const mongoose = require('mongoose')


const userSchema =new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    empid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    

},{
    timestamps:true
})

const User = mongoose.model('Employee',userSchema)

module.exports = User
