const { redirect } = require('express/lib/response')
const Student = require('../model/student')

module.exports.studentInput = (req,res)=>{
    return res.render('student_entry_page',{
        title:'student input'
    })
}

module.exports.studentHomePage = (req,res)=>{
    return res.render('student_home',{
        title:'student home'
    })
}


module.exports.createStudentRecord = async (req,res)=>{

    try{
        student =await Student.findOne({details:{email:req.body.email}})
        if(!student){
                //create a student
                stdn=await Student.create({
                    batch:req.body.batch,
                    details:{
                        name:req.body.name,
                        email:req.body.email,                           
                        mobileNo:req.body.mobileNumber,
                        college:req.body.college,
                        status:req.body.status
                      },
                    Course_score:{
                        DSA:req.body.ScoreDSA,
                        WebD:req.body.ScoreWebD,
                        React:req.body.ScoreReact
                
                      }
                })
                if(stdn){

                    console.log('Student Created',stdn);
                }
        }

        console.log(req.body)
        res.redirect('back')

    }catch(err){
        console.log('error',err)

    }

}


module.exports.showDetails =async (req,res)=>{
    const stdn =await Student.find({})
    
    console.log(stdn)

    return res.render('student_details',{
        records:stdn,
        title:'details'
    })
}