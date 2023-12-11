//this connects the sit to the mongodb

//DEPENDENCIES 
/////////////////////
const mongoose = require('mongoose');
//this is the database defined in the .env file -> destructured 
const {DATABASE_URI} = process.env;

mongoose.connect(DATABASE_URI)

// connection is a predefined system that we can use the method '.on()'
//to triggere events based on connecting to mongo db
//we will use this to send queues to us when something is connected or not
mongoose.connection
.on('open', ()=> console.log('connection to mongoDB'))
.on('close', ()=> console.log('disconnected from mongodb'))
.on('error', (error)=> console.log(error))
