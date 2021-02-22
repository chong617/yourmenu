require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var postFeedbackRoutes = require('./controllers/postFeedbackController')



var app = express()
app.use(bodyParser.json())
app.listen(4000,()=>console.log('Server started at :4000'))
app.use(cors({origin :'http://localhost:3000/contactus'}))
app.use('/postFeedback',postFeedbackRoutes)