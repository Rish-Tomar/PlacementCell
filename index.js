// imports and some required constants
const PORT      = 8000
const db        = require('./config/mongoose')
const express   = require('express')
const res       = require('express/lib/response')
const path      =require('path')
const expressLayouts  = require('express-ejs-layouts')
const sassMiddleware  = require('node-sass-middleware')

//some other requirements
const app = express()


//database



//middlewares
//setting ejs as our view template and setting it's path 

app.use(sassMiddleware({
       src: path.join(__dirname,'./assets/scss'),
       dest: path.join(__dirname,'./assets/css'),
       debug: true,
       outputStyle: 'extended',
       prefix: '/css'
   }))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.static('./assets'))

//call express layouts before routes as it routes will be requiring to render these layouts so should be loaded before routes
app.use(expressLayouts)
//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

//use express router
app.use('/',require('./routes'))


//listining on port
app.listen(PORT, (err) => {
    if(err){
        console.log('Server connot be started',err);
    }
    console.log(`Server is running on port number : ${PORT}`);

})
