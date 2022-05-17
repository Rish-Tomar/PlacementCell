const { redirect } = require('express/lib/response')
const Student = require('../model/student')
const { parse } = require('json2csv');
const fs = require('fs')
const path = require('path')

module.exports.studentInput = (req,res)=>{
    return res.render('student_entry_page',{
        title:'student input'
    })
}

module.exports.addInterview =async (req,res)=>{

    // return res.redirect('back')
    try{
        const stdn =await Student.findById(req.query.id)

        if(stdn){
            console.log(stdn.interviews)
        }


    }catch(err){
        console.log('error',err);
    }


}


module.exports.studentHomePage = async (req,res)=>{
    const stdn =await Student.find({})
    return res.render('student_home',{
        title:'student home',
        records:stdn
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
//downloading the file
    console.log(req.query.st_id)
    const data =await Student.findById(req.query.st_id)

    return res.render('student_details',{
        record:data,
        title:'details'
    })
}
 
module.exports.handleDownloadFileAsCsv = async (req,res)=>{
    try{
        //fetch Students data from Students Collection
        const documents = await Student.find({})
        //preprocessing of data to simpler format to be stored in csv file
        data = []
        documents.forEach(document => {
            let obj={
                batch:  document.batch,              name:    document.details.name,
                email:  document.details.email,      mobileNo:document.details.mobileNo,
                college:  document.details.college,  status:  document.details.status,
                DSA:      document.Course_score.DSA, WebD:    document.Course_score.WebD,
                React:    document.Course_score.React,     
            }
            data.push(obj)            
        });

        //convert to csv
        const fields = ['batch','name','email','mobileNo','college','status','DSA','WebD','React',];
        const opts = { fields };
        const csv = parse(data,opts);

        //writing a csv file
        try{fs.writeFileSync(path.join(__dirname,'../assets/files/details.csv'),csv)}
        catch(err)
        {   if(err){console.log('error in writing csv',err);}
            //else
            console.log('file written Successsfully');
        }
        //downloading the file using response.download method
        res.download(path.join(__dirname,'../assets/files/details.csv'))
        
    }catch(err){
        console.log('err',err);
    }


}