const mongoose = require('mongoose')
const env = require('./environment')

// mongoose.connect(`mongodb://localhost/${env.db}`)

const connection_url ='mongodb+srv://admin:rootroot@cluster0.6c9um.mongodb.net/Pcell?retryWrites=true&w=majority'
mongoose.connect(connection_url).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('no connection')
})

const db=mongoose.connection


db.on('error',console.error.bind('console',"Error connecting to Mongo db"))


db.once('open',()=>{
    console.log('Connected to DB');
})


module.exports = db



