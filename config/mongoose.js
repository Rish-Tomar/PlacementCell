const mongoose = require('mongoose')
const env = require('./environment')

// mongoose.connect(`mongodb://localhost/${env.db}`)

// mongoose.connect(`mongodb://localhost/PlacementCell_development`)

const connection_url ='mongodb+srv://admin:rootroot@cluster0.6c9um.mongodb.net/?retryWrites=true&w=majority?directConnection=true'
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
}).then(()=>{console.log('connected to atlas')})
.catch((err)=> console.log('error',err))

const db=mongoose.connection


db.on('error',console.error.bind('console',"Error connecting to Mongo db"))


db.once('open',()=>{
    console.log('Connected to DB');
})


module.exports = db



