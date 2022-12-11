const express = require('express')
const quizRouter = require('./routes/quiz')
const userRouter = require('./routes/user')
const indexRouter = require('./routes/index')


const bodyParser = require('body-parser')

require('./routes/mongo-connection')

const app = express()



app.use(bodyParser.json())

app.set('view engine', 'pug') 

app.use('/quizs', quizRouter)
app.use('/users', userRouter)
app.use('/', indexRouter)

module.exports = app