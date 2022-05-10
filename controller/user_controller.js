const User = require('../model/user')


module.exports.signIn = (req,res)=>{
    return res.render('user_sign_in',{
        title:'User Sign In'
    })
}



module.exports.signUp= (req,res)=>{
    return res.render('user_sign_up',{
        title:'User Sign Up'
    })
}


module.exports.createUser = (req,res)=>{
    //check if password and confirm password are same or not
    if(req.body.password!==req.body.confirm_password)
    {
        return res.redirect('back')
    }

    //if same then create user in our user database
    
    //finding if user already exist
    User.findOne({userID: req.body.usere}, (err,user)=>{
        if(err){console.log('error in finding user',err);return}
        

        //if user doesnot exist then create one
        if(!user){
            User.create( { userID:req.body.useremail,
                           name:req.body.username,
                           password:req.body.password}, (err,user)=>{
                if(err){console.log('error in creating user',err);return}

                //if no error then set user variables  


            })

        }
    })


    console.log("this is :",req.body.useremail)
    return res.redirect('back')
}