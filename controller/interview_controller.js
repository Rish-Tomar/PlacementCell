const Intview =require('../model/interviews')




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

    // return res.render('interview_page',{
    //     title:'Interview Details',
    //     interview_details:allDetails

    // })

}


module.exports.remove=async (req,res)=>{

    console.log(req.query.id);
    //delete interview from interviews schema 
    Intview.findByIdAndDelete(req.query.id,(err)=>{
        if(err){ console.log('error while deleting',err)
                  return}
        console.log('deleted')
        res.redirect('back')
    
    })
    
   


    //delete interview from individual student interviews schema


}


