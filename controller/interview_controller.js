const Intview =require('../model/interviews')
const Student =require('../model/student')


module.exports.InterviewHome=async (req,res)=>{
    const allDetails = await Intview.find({})
    console.log(allDetails);
    return res.render('interview_page',{
        title:'Interview Details',
        interview_details:allDetails
    })
}


module.exports.createInterview=async (req,res)=>{
    const findInterview = await Intview.findOne({jobId:req.body.job_id})

    if(!findInterview){
        //create new interview
        const created= await Intview.create({
            companyName:req.body.name,
            date:req.body.date,
            requirement:req.body.requireFor,
            jobId:req.body.job_id
        })

        if(created){console.log('interview created');}

    }

    const allDetails = await Intview.find({})

    res.redirect('/interview')
}


module.exports.remove=async (req,res)=>{

    //deleting this interview entry from student's interview array
    const data=await Intview.findById(req.query.id)
    data.students.forEach(element => {

        //find the student and update records
        const std=Student.findByIdAndUpdate(element,{$pull:{interviews:req.query.id}},function(err){
            if(err){console.log('error',err)}
            console.log(std.interviews)
        })
    });

    //delete interview from interviews schema 
    Intview.findByIdAndDelete(req.query.id,(err)=>{
        if(err){ console.log('error while deleting',err)
                  return}
        res.redirect('back')
    })
}


module.exports.seeEachInterviewStudentsAssigned =async (req,res)=>{
    const interviewData = await Intview.findById(req.query.id).populate('students')
    
    console.log(interviewData)
    return res.render('interview_details',{
        title:'Interview Details',
        data:interviewData
    })

}