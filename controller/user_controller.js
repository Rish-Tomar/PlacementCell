const User = require('../model/employee')

//module to handle "/users/sign-in" request
module.exports.signIn = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('back')
    }
    return res.render('user_sign_in',{
        title:'User Sign In'
    })
}



//module to handle "/users/sign-up" request
module.exports.signUp= (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('back')
    }
    return res.render('user_sign_up',{
        title:'User Sign Up'
    })
}


//module to handle "/users/create" request
module.exports.createUser =(req,res)=>{
    //check if password and confirm password are same or not
    if(req.body.password!==req.body.confirm_password)
    {
        return res.redirect('back')
    }    
    //finding if user already exist
    User.findOne({empid: req.body.empid}, (err,user)=>{
        if(err){console.log('error in finding user',err);return}
        
        //if user doesnot exist then create one
        if(!user){
            User.create( req.body, (err,user)=>{
                if(err){console.log('error in creating user',err);return}
                
                return res.redirect('/users/sign-in')
            })
           
        }
        if(user){
            console.log('user already exists, go to sign in')
            return res.redirect('/users/sign-up')
        }
        
    })
    
}


//module to handle "/users/create-session" request
module.exports.createSession = (req,res)=>{
    req.flash('success','Logged in successfully')
    return res.redirect('/')
}


//module to handle "/users/sign-out" request
module.exports.destroySession = (req,res)=>{
    //using logout function provided by passport
    req.logout();
    req.flash('success','Logged out successfully')
    return res.redirect('/')
}