// imports and some required constants
const PORT      = 8000
const db        = require('./config/mongoose')
const express   = require('express')
const res       = require('express/lib/response')
const path      =require('path')
const expressLayouts  = require('express-ejs-layouts')
const sassMiddleware  = require('node-sass-middleware')
const cookieParser    = require('cookie-parser')

//used for session cookie and passport authentication
const session  = require('express-session')
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')

//some other requirements
const app = express()


//database



//middlewares
//setting ejs as our view template and setting it's path 

// app.use(sassMiddleware({
//        src: path.join(__dirname,'./assets/scss'),
//        dest: path.join(__dirname,'./assets/css'),
//        debug: true,
//        outputStyle: 'extended',
//        prefix: '/css'
//    }))

//middleware for url requests and cookies  
   app.use(express.urlencoded())
   app.use(cookieParser())

//middleware for views
   app.set('view engine','ejs')
   app.set('views',path.join(__dirname,'views'))

//middleware for excessing static's
   app.use(express.static('./assets'))

//call express layouts before routes as it routes will be requiring to render these layouts so should be loaded before routes
   app.use(expressLayouts)
//extract styles and scripts from sub pages into the layout
   app.set('layout extractStyles',true)
   app.set('layout extractScripts',true)

//middleware for session and passport authentication
  app.use(session({
     name:'skillTest',
     secret:'placementcell',
     saveUninitialized:false,
     resave:false,
     cookie:{
        maxAge:(1000*60*50)
     }
  }))

  app.use(passport.initialize())
  app.use(passport.session())

   //middleware for using router structure defined in routes folder
   app.use('/',require('./routes'))


//listining on port
app.listen(PORT, (err) => {
    if(err){
        console.log('Server connot be started',err);
    }
    console.log(`Server is running on port number : ${PORT}`);

})
