const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const User = require('../model/employee')


passport.use(new Localstrategy({
    usernameField:'empid'

},(empid,password,done)=>{

    //find the user
    User.findOne({empid:empid},(err,user)=>{
        if(err){
            console.log('error in finding user',err);
            return done(err)
        }

        if(!user || user.password != password)
        {
            console.log('Invalid Request');
            return done(null,false);
        }

        return done(null,user)
    })
}
))

//descision to which key is to be kept as the cookie
passport.serializeUser(function(user,done){
    done(null,user.id)
})



passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user',err);
            return done(err)
        }
        return done(null,user)
    })
})

// check user authenticity
passport.checkAuthentication = (req,res,next)=>{

    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser = (req,res,next) =>{
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next()
}


module.exports = passport