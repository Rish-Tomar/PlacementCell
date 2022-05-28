
// require('dotenv').config()
/* DEFINING ALL VARIABLES AND IMPORT SECTION */
const PORT      = process.env.PORT || 8000
const db        = require('./config/mongoose')
const express   = require('express')
const res       = require('express/lib/response')
const path      =require('path')
const expressLayouts  = require('express-ejs-layouts')
const sassMiddleware  = require('node-sass-middleware')
const cookieParser    = require('cookie-parser')
const MongoStore = require('connect-mongo')

const Flash = require('connect-flash')
const flashMiddleware = require('./config/flashMiddleware')
//used for session cookie and passport authentication
const session  = require('express-session')
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')
// environment variables
const env= require('./config/environment') 

const app = express()

/* MIDDLEWARES */ 

//middleware to convert our scss to css and save to a folder
if(env.name=='development'){
app.use(sassMiddleware({
       src: path.join(__dirname,'./assets/scss'),
       dest: path.join(__dirname,'./assets/css'),
       debug: true,
       outputStyle: 'extended',
       prefix: '/css'
   }))
}
//middleware for url requests and cookies  
   app.use(express.urlencoded({extended: false}))
   app.use(cookieParser())

//setting ejs as our view template and setting it's path
   app.set('view engine','ejs')
   app.set('views',path.join(__dirname,'views'))

//middleware for excessing static's
   app.use(express.static('./assets'))

//call express layouts before routes as it routes will be requiring to render these layouts so should be loaded before routes
   app.use(expressLayouts)
//extract styles and scripts from sub pages into the layout
   app.set('layout extractStyles',true)
   app.set('layout extractScripts',true)

//using mongo store inside session
//middleware for session and passport authentication
console.log(process.env.PORT)
console.log(process.env.SessionCookieKey)
  app.use(session({
     name:'skillTest',
     secret:env.session_cookie_key,
     saveUninitialized:false,
     resave:false,
     cookie:{
        maxAge:(1000*60*50)
     },
     store: MongoStore.create({
        mongoUrl:'mongodb://localhost/PlacementCell_development',
        autoRemove:'disabled'
      },
      function(err){
         console.log(err ||'Connected to mongostore db');
      }
     )
   }))
  app.use(passport.initialize())
  app.use(passport.session())
  //middleware for saving the users information in cookies
app.use(passport.setAuthenticatedUser)

//using flash 'connect-flash'
app.use(Flash())
app.use(flashMiddleware.setFlash)

   //middleware for using router structure defined in routes folder
   app.use('/',require('./routes'))


//listining on port
app.listen(process.env.PORT, (err) => {
    if(err){
        console.log('Server connot be started',err);
    }
    console.log(`Server is running on port number : ${PORT}`);

})
