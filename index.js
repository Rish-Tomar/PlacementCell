// imports and some required constants
const PORT = 8000

const express = require('express')
const res = require('express/lib/response')
const path=require('path')
const expressLayouts = require('express-ejs-layouts')

//some other requirements
const app = express()


//database



//middlewares
//setting ejs as our view template and setting it's path 
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


//call express layouts before routes as it routes will be requiring to render these layouts so should be loaded before routes
app.use(expressLayouts)
//use express router
app.use('/',require('./routes'))


//listining on port
app.listen(PORT, (err) => {
    if(err){
        console.log('Server connot be started',err);
    }
    console.log(`Server is running on port number : ${PORT}`);

})
