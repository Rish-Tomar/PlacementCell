const mongoose = require('mongoose')
const env = require('./environment')

// mongoose.connect(`mongodb://localhost/${env.db}`)

const connection_url ='mongodb+srv://admin:rootroot@cluster.rxsa9.mongodb.net/Database1?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection


db.on('error',console.error.bind('console',"Error connecting to Mongo db"))


db.once('open',()=>{
    console.log('Connected to DB');
})


module.exports = db



