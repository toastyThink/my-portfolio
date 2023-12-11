
//DEPENDENCIES
//////////////////////

//initialising .env variables
require('dotenv').config()
//initialising db connection
require('./config/db.connection')

//reading the port variable in the .env file
const {PORT} = process.env

//importing express cors morgan
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//create the application object
const app = express()

//Mounting routes for requests/data flow
///////////////////////////////////////////////////////
app.use(express.json())
app.use(express.urlencoded({extrended: true}))

app.use(cors())
app.use(morgan('dev'))

//Page Request Routes
///////////////////////////////////////////////////////

//index page
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Listener
///////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
